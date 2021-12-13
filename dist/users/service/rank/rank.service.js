"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rank_entity_1 = require("../../entities/rank.entity");
const user_entity_1 = require("../../entities/user.entity");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const ranks = [{
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
    }];
let RankService = class RankService {
    constructor(repository) {
        this.repository = repository;
    }
    async populateRank() {
        const listOfRanks = [];
        ranks.forEach(element => {
            listOfRanks.push(element);
        });
        await this.repository.save(listOfRanks);
    }
    async getMinGrade(rankId) {
        return (0, typeorm_3.getRepository)(rank_entity_1.Rank).createQueryBuilder('rank')
            .where({ id: rankId })
            .select(['rank.minGrade'])
            .getOne();
    }
};
RankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rank_entity_1.Rank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RankService);
exports.RankService = RankService;
//# sourceMappingURL=rank.service.js.map