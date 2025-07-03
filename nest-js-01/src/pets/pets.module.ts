import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/pets/schema/pet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])
  ],
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}
