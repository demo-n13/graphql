import { Injectable } from '@nestjs/common';
import { CreateCarTypeInput } from './dto/create-car-type.input';
import { UpdateCarTypeInput } from './dto/update-car-type.input';
import { PrismaService } from '@prisma';

@Injectable()
export class CarTypeService {
  constructor(private prisma: PrismaService) {}

  async create(createCarTypeInput: CreateCarTypeInput) {
    return await this.prisma.carType.create({
      data: {
        name: createCarTypeInput.name,
      },
    });
  }

  async findAll() {
    return await this.prisma.carType.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.carType.findFirst({ where: { id } });
  }

  async update(id: number, updateCarTypeInput: UpdateCarTypeInput) {
    return await this.prisma.carType.update({
      where: { id },
      data: {
        name: updateCarTypeInput.name,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.carType.delete({ where: { id } });
  }
}
