import { Injectable } from '@nestjs/common';
import { Car } from './models';

@Injectable()
export class CarService {
  cars: Car[] = [
    { id: 1, brand: 'BMW', price: 200000, color: 'black', year: 2023 },
  ];

  constructor() {}

  getCarList() {
    return this.cars;
  }

  getOneCar(id: number) {
    return this.cars.find((c) => c.id == id);
  }
}
