import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { CarTypeService } from './car-type.service';
import { CreateCarTypeInput } from './dto/create-car-type.input';
import { UpdateCarTypeInput } from './dto/update-car-type.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver('CarType')
export class CarTypeResolver {
  private pubSub: PubSub;

  constructor(private readonly carTypeService: CarTypeService) {
    this.pubSub = new PubSub();
  }

  @Mutation('createCarType')
  async create(
    @Args('createCarTypeInput') createCarTypeInput: CreateCarTypeInput,
  ) {
    const newCarType = await this.carTypeService.create(createCarTypeInput);

    await this.pubSub.publish('carTypeAdded', { carTypeAdded: newCarType });

    return newCarType;
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
  async update(
    @Args('updateCarTypeInput') updateCarTypeInput: UpdateCarTypeInput,
  ) {
    const cartype = await this.carTypeService.update(
      updateCarTypeInput.id,
      updateCarTypeInput,
    );

    await this.pubSub.publish('carTypeUpdated', { carTypeUpdated: cartype });

    return cartype;
  }

  @Mutation('removeCarType')
  remove(@Args('id') id: number) {
    return this.carTypeService.remove(id);
  }

  @Subscription('carTypeAdded')
  carTypeAdded() {
    return this.pubSub.asyncIterator('carTypeAdded');
  }

  @Subscription('carTypeUpdated')
  carTypeUpdated() {
    return this.pubSub.asyncIterator('carTypeUpdated');
  }
}
