"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserReviewDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_review_dto_1 = require("./create-user-review.dto");
class UpdateUserReviewDto extends (0, mapped_types_1.PartialType)(create_user_review_dto_1.CreateUserReviewDto) {
}
exports.UpdateUserReviewDto = UpdateUserReviewDto;
//# sourceMappingURL=update-user-review.dto.js.map