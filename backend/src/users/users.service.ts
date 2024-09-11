import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
    // This is where we inject the PrismaService into the UsersService
  }

  async create(data: Prisma.UserCreateInput) {
    try {
      const currentDate = new Date();
      data.createdAt = currentDate;

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
      const newUser = await this.prisma.user.create({
        data,
      });

      return newUser;
    } catch (error) {
      throw new Error(`Failed to create user: ${error.mesage}`);
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  remove(id: number) {
    // Delete the user with the specified id
    return this.prisma.user.delete({
      where: { id },
    });
  }

  // Profile information and amangement

  // return 'This action returns the information of my profile';
  getProfile(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  updateProfile() {
    // return this.usersService.updateProfile();
  }

  deleteProfile() {
    // return this.usersService.deleteProfile();
  }
}
