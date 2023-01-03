import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from '../authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private authorRepository: AuthorsService,
  ) {}
  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }
  async findProductById(id: number): Promise<Post> {
    return await this.postRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post);
    return await this.postRepository.save(newPost);
  }

  async getAuthor(id: number): Promise<Author> {
    return await this.authorRepository.findOne(id);
  }
}
