import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from '../depense/depense.entity';
import { Revenu } from '../revenu/revenu.entity';
import { DepenseService } from '../depense/depense.service';
import { RevenuService } from '../revenu/revenu.service';
import { DepenseController } from '../depense/depense.controller';
import { RevenuController } from '../revenu/revenu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Depense, Revenu])],
  providers: [DepenseService, RevenuService],
  controllers: [DepenseController, RevenuController],
})
export class GestionModule {}