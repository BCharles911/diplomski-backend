"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsModule = void 0;
const common_1 = require("@nestjs/common");
const skills_service_1 = require("./skills.service");
const skills_controller_1 = require("./skills.controller");
const skill_entity_1 = require("./entities/skill.entity");
const typeorm_1 = require("@nestjs/typeorm");
const job_posts_module_1 = require("../job-posts/job-posts.module");
let SkillsModule = class SkillsModule {
};
SkillsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([skill_entity_1.Skill]),
            (0, common_1.forwardRef)(() => job_posts_module_1.JobPostsModule)],
        exports: [typeorm_1.TypeOrmModule, skills_service_1.SkillsService],
        controllers: [skills_controller_1.SkillsController],
        providers: [skills_service_1.SkillsService]
    })
], SkillsModule);
exports.SkillsModule = SkillsModule;
//# sourceMappingURL=skills.module.js.map