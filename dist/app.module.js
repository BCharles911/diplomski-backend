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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const job_posts_module_1 = require("./job-posts/job-posts.module");
const user_entity_1 = require("./users/entities/user.entity");
const job_post_entity_1 = require("./job-posts/entities/job-post.entity");
const skills_module_1 = require("./skills/skills.module");
const user_skills_module_1 = require("./user-skills/user-skills.module");
const user_skill_entity_1 = require("./user-skills/entities/user-skill.entity");
const skill_entity_1 = require("./skills/entities/skill.entity");
const requests_module_1 = require("./requests/requests.module");
const request_entity_1 = require("./requests/entities/request.entity");
const user_reviews_module_1 = require("./user-reviews/user-reviews.module");
const user_review_entity_1 = require("./user-reviews/entities/user-review.entity");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const job_post_skills_entity_1 = require("./job-posts/entities/job-post-skills.entity");
const city_entity_1 = require("./users/entities/city.entity");
const rank_entity_1 = require("./users/entities/rank.entity");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env.development' }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MYSQL_DB_HOST,
                port: Number.parseInt(process.env.MYSQL_DB_PORT),
                username: process.env.MYSQL_DB_USER,
                password: process.env.MYSQL_DB_PASS,
                database: process.env.MYSQL_DB_NAME,
                entities: [
                    user_entity_1.User,
                    job_post_entity_1.JobPost,
                    skill_entity_1.Skill,
                    user_skill_entity_1.UserSkill,
                    request_entity_1.Request,
                    user_review_entity_1.UserReview,
                    job_post_skills_entity_1.JobPostSkills,
                    city_entity_1.City,
                    rank_entity_1.Rank
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            job_posts_module_1.JobPostsModule,
            skills_module_1.SkillsModule,
            user_skills_module_1.UserSkillsModule,
            requests_module_1.RequestsModule,
            user_reviews_module_1.UserReviewsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map