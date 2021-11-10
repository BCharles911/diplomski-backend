import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityCalendarsService } from './availability-calendars.service';

describe('AvailabilityCalendarsService', () => {
  let service: AvailabilityCalendarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailabilityCalendarsService],
    }).compile();

    service = module.get<AvailabilityCalendarsService>(AvailabilityCalendarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
