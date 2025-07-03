// src/pets/pets.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from 'src/pets/schema/pet.schema';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  async findAll(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @Post()
  async create(@Body() body: Partial<Pet>): Promise<Pet> {
    return this.petsService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Partial<Pet>): Promise<Pet> {
    return this.petsService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.petsService.delete(id);
    return { message: 'Pet deleted successfully' };
  }
}
