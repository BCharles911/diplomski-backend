"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostsModule = void 0;
const common_1 = require("@nestjs/common");
const job_posts_service_1 = require("./job-posts.service");
const job_posts_controller_1 = require("./job-posts.controller");
const job_post_entity_1 = require("./entities/job-post.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/service/users.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_module_1 = require("../users/users.module");
const skills_module_1 = require("../skills/skills.module");
const job_post_skills_entity_1 = require("./entities/job-post-skills.entity");
let JobPostsModule = class JobPostsModule {
};
JobPostsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([job_post_entity_1.JobPost, user_entity_1.User, job_post_skills_entity_1.JobPostSkills]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => skills_module_1.SkillsModule),
        ],
        exports: [typeorm_1.TypeOrmModule, job_posts_service_1.JobPostsService],
        controllers: [job_posts_controller_1.JobPostsController],
        providers: [job_posts_service_1.JobPostsService]
    })
], JobPostsModule);
exports.JobPostsModule = JobPostsModule;
//# sourceMappingURL=job-posts.module.js.map