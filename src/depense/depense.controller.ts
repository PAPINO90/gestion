import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { DepenseService } from './depense.service';

@Controller('depense')
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) {}

  // Récupérer toutes les dépenses
  @Get()
  findAll() {
    return this.depenseService.findAll();
  }

  // Ajouter une nouvelle dépense
  @Post()
  create(@Body() depense: { titre: string; montant: number }) {
    return this.depenseService.create(depense);
  }

  // Supprimer une dépense par ID
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.depenseService.delete(Number(id));
  }
}