import { Test, TestingModule } from '@nestjs/testing';
import { FavoritoTweetController } from './favorito-tweet.controller';
import { FavoritoTweetService } from './favorito-tweet.service';

describe('FavoritoTweetController', () => {
  let controller: FavoritoTweetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritoTweetController],
      providers: [FavoritoTweetService],
    }).compile();

    controller = module.get<FavoritoTweetController>(FavoritoTweetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
