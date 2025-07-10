import {
  Controller,
  Get,
  Put,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 👤 Lấy thông tin cá nhân
  @Get('me')
  getProfile(@Req() req) {
    return this.usersService.getProfile(req.user.userId);
  }

  // 📝 Cập nhật thông tin cá nhân
  @Put('me')
  updateProfile(@Body() body: { name: string }, @Req() req) {
    return this.usersService.updateProfile(req.user.userId, body);
  }

  // 🔒 Chỉ admin truy cập
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Get('admin-only')
  getAdminData(@Req() req) {
    return { msg: 'Only admin can see this', user: req.user };
  }
}
