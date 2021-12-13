import { City } from 'src/users/entities/city.entity';
import { Repository } from 'typeorm';
export declare class CityService {
    private readonly repository;
    constructor(repository: Repository<City>);
    create(city: any): Promise<City>;
}
