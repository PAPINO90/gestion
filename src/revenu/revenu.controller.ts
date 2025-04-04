import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { RevenuService } from './revenu.service';

@Controller('revenu')
export class RevenuController {
  constructor(private readonly revenuService: RevenuService) {}

  // Récupérer tous les revenus
  @Get()
  findAll() {
    return this.revenuService.findAll();
  }

  // Ajouter un nouveau revenu
  @Post()
  create(@Body() revenu: { titre: string; montant: number }) {
    return this.revenuService.create(revenu);
  }

  // Supprimer un revenu par ID
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.revenuService.delete(Number(id));
  }
}


