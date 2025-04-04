import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Depense } from './depense.entity';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,
  ) {}

  // Récupérer toutes les dépenses
  findAll(): Promise<Depense[]> {
    return this.depenseRepository.find();
  }

  // Ajouter une nouvelle dépense
  create(depense: Partial<Depense>): Promise<Depense> {
    return this.depenseRepository.save(depense);
  }

  // Supprimer une dépense par ID
  async delete(id: number): Promise<{ message: string }> {
    const result = await this.depenseRepository.delete(id);
    if (result.affected) {
      return { message: 'Dépense supprimée' };
    } else {
      return { message: 'Dépense introuvable' };
    }
  }
}