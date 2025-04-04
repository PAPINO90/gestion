import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './revenu.entity';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])], // Importer l'entité Revenu
  providers: [RevenuService],
  controllers: [RevenuController],
})
export class RevenuModule {}