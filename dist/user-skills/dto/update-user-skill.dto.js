"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSkillDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_skill_dto_1 = require("./create-user-skill.dto");
class UpdateUserSkillDto extends (0, mapped_types_1.PartialType)(create_user_skill_dto_1.CreateUserSkillDto) {
}
exports.UpdateUserSkillDto = UpdateUserSkillDto;
//# sourceMappingURL=update-user-skill.dto.js.map