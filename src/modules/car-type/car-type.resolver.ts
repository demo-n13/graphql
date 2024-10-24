import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarTypeService } from './car-type.service';
import { CreateCarTypeInput } from './dto/create-car-type.input';
import { UpdateCarTypeInput } from './dto/update-car-type.input';

@Resolver('CarType')
export class CarTypeResolver {
  constructor(private readonly carTypeService: CarTypeService) {}

  @Mutation('createCarType')
  create(@Args('createCarTypeInput') createCarTypeInput: CreateCarTypeInput) {
    return this.carTypeService.create(createCarTypeInput);
  }

  @Query('carTypes')
  findAll() {
    return this.carTypeService.findAll();
  }

  @Query('carType')
  findOne(@Args('id') id: number) {
    return this.carTypeService.findOne(id);
  }

  @Mutation('updateCarType')
  update(@Args('updateCarTypeInput') updateCarTypeInput: UpdateCarTypeInput) {
    return this.carTypeService.update(updateCarTypeInput.id, updateCarTypeInput);
  }

  @Mutation('removeCarType')
  remove(@Args('id') id: number) {
    return this.carTypeService.remove(id);
  }
}
