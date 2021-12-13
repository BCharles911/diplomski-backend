"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const user_reviews_service_1 = require("./user-reviews.service");
const user_reviews_controller_1 = require("./user-reviews.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_review_entity_1 = require("./entities/user-review.entity");
let UserReviewsModule = class UserReviewsModule {
};
UserReviewsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_review_entity_1.UserReview])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [user_reviews_controller_1.UserReviewsController],
        providers: [user_reviews_service_1.UserReviewsService]
    })
], UserReviewsModule);
exports.UserReviewsModule = UserReviewsModule;
//# sourceMappingURL=user-reviews.module.js.map