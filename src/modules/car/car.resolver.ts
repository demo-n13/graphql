import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { Car } from './models';
import { CarService } from './car.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Car)
export class CarResolver {
  constructor(private service: CarService) {}

  @Query(() => [Car])
  getCarlist() {
    return this.service.getCarList();
  }

  @Query(() => Car)
  getOneCar(@Args('id', { type: () => Int }, ParseIntPipe) id: number) {
    return this.service.getOneCar(id);
  }
}
