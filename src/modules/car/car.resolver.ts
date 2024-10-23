import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './models';
import { CarService } from './car.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCarDto } from './dtos';

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

  @Mutation(() => Car)
  createCar(
    @Args('createCarDto', { type: () => CreateCarDto }) payload: CreateCarDto,
  ) {
    return this.service.createCar(payload);
  }
}
