import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;
  @Field()
  title: string;
  @Field({ nullable: true })
  content?: string;
}
