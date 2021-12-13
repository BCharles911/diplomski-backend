import { Rank } from 'src/users/entities/rank.entity';
import { Repository } from 'typeorm';
export declare class RankService {
    private readonly repository;
    constructor(repository: Repository<Rank>);
    populateRank(): Promise<void>;
    getMinGrade(rankId: any): Promise<Rank>;
}
