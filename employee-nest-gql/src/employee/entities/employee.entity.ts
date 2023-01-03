import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field()
  id: number;

  @Field()
  firtsName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field({ nullable: true })
  city: string;
}
