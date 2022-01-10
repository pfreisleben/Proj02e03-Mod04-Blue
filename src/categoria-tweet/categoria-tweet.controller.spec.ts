import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaTweetController } from './categoria-tweet.controller';
import { CategoriaTweetService } from './categoria-tweet.service';

describe('CategoriaTweetController', () => {
  let controller: CategoriaTweetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaTweetController],
      providers: [CategoriaTweetService],
    }).compile();

    controller = module.get<CategoriaTweetController>(CategoriaTweetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
