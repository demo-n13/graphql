import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
  constructor() {}

  getCarList() {
    return [{ id: 1, brand: 'BMW', price: 200000, color: 'black', year: 2023 }];
  }
}
