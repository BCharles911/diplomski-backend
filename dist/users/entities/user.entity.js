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
exports.User = exports.TierLevel = exports.UserRole = void 0;
const class_validator_1 = require("class-validator");
const job_post_entity_1 = require("../../job-posts/entities/job-post.entity");
const request_entity_1 = require("../../requests/entities/request.entity");
const user_review_entity_1 = require("../../user-reviews/entities/user-review.entity");
const user_skill_entity_1 = require("../../user-skills/entities/user-skill.entity");
const typeorm_1 = require("typeorm");
const city_entity_1 = require("./city.entity");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["EMPLOYER"] = "employer";
    UserRole["EMPLOYEE"] = "employee";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var TierLevel;
(function (TierLevel) {
    TierLevel["BRONZE"] = "bronze";
    TierLevel["SILVER"] = "silver";
    TierLevel["GOLD"] = "gold";
    TierLevel["PLATINUM"] = "platinum";
})(TierLevel = exports.TierLevel || (exports.TierLevel = {}));
let User = class User {
    constructor(partial) {
        Object.assign(this, partial);
    }
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "emailToLowerCase", null);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: TierLevel,
        default: TierLevel.BRONZE
    }),
    __metadata("design:type", String)
], User.prototype, "tierLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserRole,
        default: UserRole.EMPLOYEE,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_post_entity_1.JobPost, jobPost => jobPost.user),
    __metadata("design:type", Array)
], User.prototype, "jobPosts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.Request, request => request.user),
    __metadata("design:type", Array)
], User.prototype, "requests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_skill_entity_1.UserSkill, userSkill => userSkill.user),
    __metadata("design:type", Array)
], User.prototype, "userSkills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_review_entity_1.UserReview, review => review.user),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, city => city.users),
    __metadata("design:type", city_entity_1.City)
], User.prototype, "city", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map