import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityCalendarsController } from './availability-calendars.controller';
import { AvailabilityCalendarsService } from './availability-calendars.service';

describe('AvailabilityCalendarsController', () => {
  let controller: AvailabilityCalendarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailabilityCalendarsController],
      providers: [AvailabilityCalendarsService],
    }).compile();

    controller = module.get<AvailabilityCalendarsController>(AvailabilityCalendarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
