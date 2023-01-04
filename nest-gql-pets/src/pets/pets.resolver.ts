import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Mutation(() => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }

  @Query(() => [Pet], { name: 'pets' })
  findAll() {
    return this.petsService.findAll();
  }

  @Query(() => Pet, { name: 'pet' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @ResolveField((returns) => Owner)
  Owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet.ownerId);
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petsService.update(updatePetInput.id, updatePetInput);
  }

  @Mutation(() => Pet)
  removePet(@Args('id', { type: () => Int }) id: number) {
    return this.petsService.remove(id);
  }
}
