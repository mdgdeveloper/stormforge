import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';
import { Public } from 'src/auth/public';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    // This is where we inject the UsersService into the UsersController
  }

  @Post()
  create(@Body() data: Prisma.UserCreateInput) {
    return this.usersService.create(data);
  }
  @Public()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Profile information and management
  @Get('profile')
  getProfile() {
    // return this.usersService.getProfile();
    // return this.usersService.getProfile();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    const params = {
      where: { id: Number(id) },
      data,
    };
    return this.usersService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Put('profile')
  updateProfile() {
    // return this.usersService.updateProfile();
  }

  @Delete('profile')
  deleteProfile() {
    // return this.usersService.deleteProfile();
  }
}
