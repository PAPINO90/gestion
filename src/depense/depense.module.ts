import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './depense.entity';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Depense])],
  providers: [DepenseService],
  controllers: [DepenseController],
})
export class DepenseModule {}