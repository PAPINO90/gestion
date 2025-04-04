import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './depense/depense.entity';
import { Revenu } from './revenu/revenu.entity';
import { GestionModule } from './gestion/gestion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root', // Remplacez par votre utilisateur MySQL
      password: 'Root', // Remplacez par votre mot de passe MySQL
      database: 'gestion',
      entities: [Depense, Revenu],
      synchronize: true, // Attention : à désactiver en production
    }),
    GestionModule, // Ajoutez le module GestionModule ici
  ],
})
export class AppModule {}