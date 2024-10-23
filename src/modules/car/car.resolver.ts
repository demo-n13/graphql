import { Query, Resolver } from '@nestjs/graphql';
import { Car } from './models';
import { CarService } from './car.service';

@Resolver(() => Car)
export class CarResolver {
  constructor(private service: CarService) {}

  @Query(() => [Car])
  getCarlist() {
    return this.service.getCarList();
  }
}
