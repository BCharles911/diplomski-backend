import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailabilityCalendarDto } from './create-availability-calendar.dto';

export class UpdateAvailabilityCalendarDto extends PartialType(CreateAvailabilityCalendarDto) {}
