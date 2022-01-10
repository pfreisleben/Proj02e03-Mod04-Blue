import { Test, TestingModule } from '@nestjs/testing';
import { FavoritoTweetService } from './favorito-tweet.service';

describe('FavoritoTweetService', () => {
  let service: FavoritoTweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritoTweetService],
    }).compile();

    service = module.get<FavoritoTweetService>(FavoritoTweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
