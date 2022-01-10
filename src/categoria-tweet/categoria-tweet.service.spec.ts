import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaTweetService } from './categoria-tweet.service';

describe('CategoriaTweetService', () => {
  let service: CategoriaTweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaTweetService],
    }).compile();

    service = module.get<CategoriaTweetService>(CategoriaTweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
