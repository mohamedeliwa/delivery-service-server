import { Test, TestingModule } from '@nestjs/testing';
import { ParcelsGateway } from './parcels.gateway';

describe('ParcelsGateway', () => {
  let gateway: ParcelsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParcelsGateway],
    }).compile();

    gateway = module.get<ParcelsGateway>(ParcelsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
