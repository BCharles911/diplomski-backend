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
exports.JobPostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const skill_entity_1 = require("../skills/entities/skill.entity");
const skills_service_1 = require("../skills/skills.service");
const users_service_1 = require("../users/service/users.service");
const typeorm_2 = require("typeorm");
const job_post_skills_entity_1 = require("./entities/job-post-skills.entity");
const job_post_entity_1 = require("./entities/job-post.entity");
let JobPostsService = class JobPostsService {
    constructor(repository, usersService, skillsService, jobPostSkillsRepository) {
        this.repository = repository;
        this.usersService = usersService;
        this.skillsService = skillsService;
        this.jobPostSkillsRepository = jobPostSkillsRepository;
        this.skills = [];
    }
    async create(createJobPostDto, id) {
        await this.usersService.findOne(id).then(user => {
            createJobPostDto.user = user;
            this.repository.save(createJobPostDto).then(newJobPost => {
                createJobPostDto.jobPostSkills.forEach(skill => {
                    this.skillsService.getById(skill.id).then(result => {
                        this.jobPostSkillsRepository.save(new job_post_skills_entity_1.JobPostSkills(newJobPost, result));
                    });
                });
            });
        });
    }
    findAll() {
        return this.repository.find({
            relations: ["user", "requests", "jobPostSkills"]
        });
    }
    findOne(id) {
        return `This action returns a #${id} jobPost`;
    }
    update(id, updateJobPostDto) {
        return `This action updates a #${id} jobPost`;
    }
    remove(id) {
        return `This action removes a #${id} jobPost`;
    }
};
JobPostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_post_entity_1.JobPost)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => skills_service_1.SkillsService))),
    __param(3, (0, typeorm_1.InjectRepository)(job_post_skills_entity_1.JobPostSkills)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        skills_service_1.SkillsService,
        typeorm_2.Repository])
], JobPostsService);
exports.JobPostsService = JobPostsService;
//# sourceMappingURL=job-posts.service.js.map