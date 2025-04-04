import { Injectable } from '@nestjs/common';
import { DepenseService } from '../depense/depense.service';
import { RevenuService } from '../revenu/revenu.service';

@Injectable()
export class GestionService {
  constructor(
    private readonly depenseService: DepenseService,
    private readonly revenuService: RevenuService,
  ) {}

  // Calculer le total des dépenses
  async getTotalDepenses(): Promise<number> {
    const depenses = await this.depenseService.findAll();
    return depenses.reduce((total, depense) => total + depense.montant, 0);
  }

  // Calculer le total des revenus
  async getTotalRevenus(): Promise<number> {
    const revenus = await this.revenuService.findAll();
    return revenus.reduce((total, revenu) => total + revenu.montant, 0);
  }

  // Calculer le solde total (revenus - dépenses)
  async getSoldeTotal(): Promise<number> {
    const totalDepenses = await this.getTotalDepenses();
    const totalRevenus = await this.getTotalRevenus();
    return totalRevenus - totalDepenses;
  }
}