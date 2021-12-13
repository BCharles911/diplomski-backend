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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostSkills = exports.SkillLevel = void 0;
const skill_entity_1 = require("../../skills/entities/skill.entity");
const typeorm_1 = require("typeorm");
const job_post_entity_1 = require("./job-post.entity");
var SkillLevel;
(function (SkillLevel) {
    SkillLevel["BEGGINER"] = "begginer";
    SkillLevel["ADVANCED"] = "advanced";
    SkillLevel["EXPERT"] = "expert";
})(SkillLevel = exports.SkillLevel || (exports.SkillLevel = {}));
let JobPostSkills = class JobPostSkills {
    constructor(jobPost, skill, skillLevel) {
        this.jobPost = jobPost;
        this.skill = skill;
        this.skillLevel = skillLevel;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], JobPostSkills.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => job_post_entity_1.JobPost, jobPost => jobPost.jobPostSkills, { primary: true }),
    __metadata("design:type", job_post_entity_1.JobPost)
], JobPostSkills.prototype, "jobPost", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => skill_entity_1.Skill, skill => skill.jobPostSkills, { primary: true }),
    __metadata("design:type", skill_entity_1.Skill)
], JobPostSkills.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SkillLevel,
        default: SkillLevel.BEGGINER
    }),
    __metadata("design:type", String)
], JobPostSkills.prototype, "skillLevel", void 0);
JobPostSkills = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [job_post_entity_1.JobPost, skill_entity_1.Skill, String])
], JobPostSkills);
exports.JobPostSkills = JobPostSkills;
//# sourceMappingURL=job-post-skills.entity.js.map