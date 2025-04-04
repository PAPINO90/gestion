import { Test, TestingModule } from '@nestjs/testing';
import { GestionController } from './gestion.controller';

describe('GestionController', () => {
  let controller: GestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionController],
    }).compile();

    controller = module.get<GestionController>(GestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
