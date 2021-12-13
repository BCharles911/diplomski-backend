"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReviewsService = void 0;
const common_1 = require("@nestjs/common");
let UserReviewsService = class UserReviewsService {
    create(createUserReviewDto) {
        return 'This action adds a new userReview';
    }
    findAll() {
        return `This action returns all userReviews`;
    }
    findOne(id) {
        return `This action returns a #${id} userReview`;
    }
    update(id, updateUserReviewDto) {
        return `This action updates a #${id} userReview`;
    }
    remove(id) {
        return `This action removes a #${id} userReview`;
    }
};
UserReviewsService = __decorate([
    (0, common_1.Injectable)()
], UserReviewsService);
exports.UserReviewsService = UserReviewsService;
//# sourceMappingURL=user-reviews.service.js.map