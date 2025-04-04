import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revenu } from './revenu.entity';

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>, // Injecter le repository TypeORM pour l'entité Revenu
  ) {}

  // Récupérer tous les revenus
  findAll(): Promise<Revenu[]> {
    return this.revenuRepository.find(); // Récupérer tous les revenus depuis la base de données
  }

  // Ajouter un nouveau revenu
  create(revenu: Partial<Revenu>): Promise<Revenu> {
    return this.revenuRepository.save(revenu); // Ajouter un revenu dans la base de données
  }

  // Supprimer un revenu par ID
  async delete(id: number): Promise<{ message: string }> {
    const result = await this.revenuRepository.delete(id); // Supprimer un revenu par son ID
    if (result.affected) {
      return { message: 'Revenu supprimé' };
    } else {
      return { message: 'Revenu introuvable' };
    }
  }
}