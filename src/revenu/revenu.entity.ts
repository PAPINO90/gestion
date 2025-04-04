import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('revenus')
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  montant: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_creation: Date;
}