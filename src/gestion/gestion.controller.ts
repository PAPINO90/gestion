import { Controller, Get } from '@nestjs/common';
import { GestionService } from './gestion.service';

@Controller('gestion')
export class GestionController {
  constructor(private readonly gestionService: GestionService) {}

  // Endpoint pour récupérer le total des dépenses
  @Get('total-depenses')
  getTotalDepenses() {
    return this.gestionService.getTotalDepenses();
  }

  // Endpoint pour récupérer le total des revenus
  @Get('total-revenus')
  getTotalRevenus() {
    return this.gestionService.getTotalRevenus();
  }

  // Endpoint pour récupérer le solde total (revenus - dépenses)
  @Get('solde-total')
  getSoldeTotal() {
    return this.gestionService.getSoldeTotal();
  }
}