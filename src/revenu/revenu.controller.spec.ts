import { Test, TestingModule } from '@nestjs/testing';
import { RevenuController } from './revenu.controller';

describe('RevenuController', () => {
  let controller: RevenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenuController],
    }).compile();

    controller = module.get<RevenuController>(RevenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
