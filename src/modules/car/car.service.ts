import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getCarList() {
    return await this.prisma.car.findMany();
  }

  async createCar(payload: {
    brand: string;
    price: number;
    color: string;
    year: number;
    carTypeId: number;
  }) {
    return await this.prisma.car.create({
      data: {
        brand: payload.brand,
        price: payload.price,
        color: payload.color,
        year: payload.year,
        carTypeId: payload.carTypeId,
      },
    });
  }

  async getOneCar(id: number) {
    return await this.prisma.car.findFirst({ where: { id } });
  }
}
