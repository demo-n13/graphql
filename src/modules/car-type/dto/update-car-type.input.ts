import { CreateCarTypeInput } from './create-car-type.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCarTypeInput extends PartialType(CreateCarTypeInput) {
  id: number;
  name: string;
}
