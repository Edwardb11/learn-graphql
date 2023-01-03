import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha() //Only letters
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
