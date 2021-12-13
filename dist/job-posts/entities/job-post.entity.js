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
exports.JobPost = void 0;
const request_entity_1 = require("../../requests/entities/request.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const job_post_skills_entity_1 = require("./job-post-skills.entity");
let JobPost = class JobPost {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], JobPost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobPost.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobPost.prototype, "jobDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("double"),
    __metadata("design:type", Number)
], JobPost.prototype, "priceOfHour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobPost.prototype, "numberOfHours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobPost.prototype, "addressOfJob", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    __metadata("design:type", String)
], JobPost.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], JobPost.prototype, "fixedPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobPost.prototype, "fixedPriceValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], JobPost.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobPost.prototype, "numberOfPeople", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        select: true,
        default: false
    }),
    __metadata("design:type", Boolean)
], JobPost.prototype, "spotsFilled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", String)
], JobPost.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.jobPosts),
    __metadata("design:type", user_entity_1.User)
], JobPost.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.Request, request => request.jobPost),
    __metadata("design:type", Array)
], JobPost.prototype, "requests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_post_skills_entity_1.JobPostSkills, jobPostSkill => jobPostSkill.skill),
    __metadata("design:type", Array)
], JobPost.prototype, "jobPostSkills", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], JobPost.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], JobPost.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], JobPost.prototype, "finished", void 0);
JobPost = __decorate([
    (0, typeorm_1.Entity)()
], JobPost);
exports.JobPost = JobPost;
//# sourceMappingURL=job-post.entity.js.map