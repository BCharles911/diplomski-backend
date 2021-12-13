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
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const job_posts_service_1 = require("../job-posts/job-posts.service");
const typeorm_2 = require("typeorm");
const skill_entity_1 = require("./entities/skill.entity");
const SKILLS = ['Čuvanje dece',
    'Dostava',
    'Prevoz kamionom',
    'Vožnja bicikle',
    'Vozač B kategorija',
    'Rad na računaru',
    'Težak fizički rad',
    'Srednje težak fizički rad',
    'Lagan fizički rad',
    'Baštovanstvo',
    'Električar',
    'Šetnja pasa'
];
let SkillsService = class SkillsService {
    constructor(skillsRepository, jobPostsService) {
        this.skillsRepository = skillsRepository;
        this.jobPostsService = jobPostsService;
    }
    async createBulk() {
        await Promise.all(SKILLS.map(async (skillName) => {
            const exists = await this.nameExists(skillName);
            if (exists) {
                throw new common_1.HttpException('already exists', common_1.HttpStatus.CONFLICT);
            }
            else {
                console.log(skillName);
                const newSkill = new skill_entity_1.Skill(skillName);
                this.skillsRepository.save(this.skillsRepository.create(newSkill));
            }
        }));
    }
    create(createSkillDto) {
        return 'This action adds a new skill';
    }
    async nameExists(skillName) {
        const skill = await this.skillsRepository.findOne({
            skillName
        });
        if (skill) {
            return true;
        }
        else {
            return false;
        }
    }
    findAll() {
        return this.skillsRepository.find();
    }
    getOne(skillName) {
        return this.skillsRepository.findOneOrFail({
            skillName
        });
    }
    getById(id) {
        return this.skillsRepository.findOne({ id });
    }
    update(id, updateSkillDto) {
        return `This action updates a #${id} skill`;
    }
    remove(id) {
        return `This action removes a #${id} skill`;
    }
};
SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(skill_entity_1.Skill)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => job_posts_service_1.JobPostsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        job_posts_service_1.JobPostsService])
], SkillsService);
exports.SkillsService = SkillsService;
//# sourceMappingURL=skills.service.js.map