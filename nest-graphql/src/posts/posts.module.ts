import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { Post } from './post.entity';
import { AuthorsModule } from 'src/authors/authors.module';
import { AuthorsService } from 'src/authors/authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule, AuthorsService],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
