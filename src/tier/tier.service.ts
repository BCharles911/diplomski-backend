import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTierDto } from './dto/create-tier.dto';
import { UpdateTierDto } from './dto/update-tier.dto';
import { Tier } from './entities/tier.entity';

@Injectable()
export class TierService {


  constructor(
    @InjectRepository(Tier)
    private tierRepository: Repository<Tier>) { }
  create(tier: Tier) {
    return this.tierRepository.save(tier)
  }

  findAll() {
    return `This action returns all tier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tier`;
  }

  update(id: number, updateTierDto: UpdateTierDto) {
    return `This action updates a #${id} tier`;
  }

  remove(id: number) {
    return `This action removes a #${id} tier`;
  }
}
