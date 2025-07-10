import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from 'generated/prisma';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(title: string, content: string, userId: number) {
    return this.prisma.post.create({
      data: {
        title,
        content,
        authorId: userId,
      },
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: { author: true },
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: number, title: string, content: string, user: User) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    if (post.authorId !== user.id && user.role !== 'ADMIN')
      throw new ForbiddenException('Not your post');

    return this.prisma.post.update({
      where: { id },
      data: { title, content },
    });
  }

  async remove(id: number, user: User) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    if (post.authorId !== user.id && user.role !== 'ADMIN')
      throw new ForbiddenException('Not your post');

    return this.prisma.post.delete({ where: { id } });
  }
}
