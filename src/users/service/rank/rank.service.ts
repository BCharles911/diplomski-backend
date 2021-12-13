import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rank } from 'src/users/entities/rank.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { getRepository } from "typeorm";

const ranks: Rank[] = [{
    id: 'id_bronze',
    name: 'bronze',
    minReviews: 5,
    maxReviews: 10,
    minGrade: 4,
    maxGrade: 4.5
},
{
    id: 'id_silver',
    name: 'silver',
    minReviews: 10,
    maxReviews: 15,
    minGrade: 4.5,
    maxGrade: 4.7
},
{
    id: 'id_gold',
    name: 'gold',
    minReviews: 15,
    maxReviews: 20,
    minGrade: 4.7,
    maxGrade: 4.9
},
{
    id: 'id_platinum',
    name: 'platinum',
    minReviews: 20,
    maxReviews: 1000,
    minGrade: 4.9,
    maxGrade: 5
}]
@Injectable()
export class RankService {

    constructor(@InjectRepository(Rank) private readonly repository: Repository<Rank>) {





    }



    async populateRank(): Promise<void> {
        const listOfRanks: Rank[] = [];
        ranks.forEach(element => {
            listOfRanks.push(element);
        });
        await this.repository.save(listOfRanks);
    }


    async getMinGrade(rankId): Promise<Rank> {
        return getRepository(Rank).createQueryBuilder('rank')
            .where({ id: rankId })
            .select(['rank.minGrade'])
            .getOne();
    }
}
