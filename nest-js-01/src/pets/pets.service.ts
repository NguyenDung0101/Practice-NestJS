// src/pets/pets.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from 'src/pets/schema/pet.schema';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name) private petModel: Model<PetDocument>
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async findOne(id: string): Promise<Pet> {
    const pet = await this.petModel.findById(id).exec();
    if (!pet) throw new NotFoundException(`Pet ${id} not found`);
    return pet;
  }

  async create(data: Partial<Pet>): Promise<Pet> {
    const createdPet = new this.petModel(data);
    return createdPet.save();
  }

  async update(id: string, data: Partial<Pet>): Promise<Pet> {
    const pet = await this.petModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!pet) throw new NotFoundException(`Pet ${id} not found`);
    return pet;
  }

  async delete(id: string): Promise<void> {
    const result = await this.petModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Pet ${id} not found`);
  }
}
