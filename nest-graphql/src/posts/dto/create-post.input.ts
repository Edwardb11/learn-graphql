import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MinLength(3, { message: 'Titulo muy corto ' })
  @MaxLength(100, { message: 'Titulo muy largo ' })
  @IsNotEmpty({ message: 'Titulo es requerido ' })
  @Field()
  title: string;

  @MaxLength(400)
  @Field({ nullable: true })
  content?: string;
}
