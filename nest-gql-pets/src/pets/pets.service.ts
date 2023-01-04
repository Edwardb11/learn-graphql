import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}
  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petsRepository.find();
  }

  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
