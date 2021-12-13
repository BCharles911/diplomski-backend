import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/users/entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {


    constructor(@InjectRepository(City) private readonly repository: Repository<City>) {

    }


    async create(city): Promise<City> {
    city = city.city
      const newCity = await this.repository.findOne({ city })
      if(!newCity) {
          return this.repository.save(new City(city.zip, city.city, city.county, city.belongsTo));
      }
      else {
          return  this.repository.findOne( { city });
      }
    }
}
