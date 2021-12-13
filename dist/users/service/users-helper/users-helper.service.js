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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersHelperService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const create_user_dto_1 = require("../../dto/create-user.dto");
const login_user_dto_1 = require("../../dto/login-user.dto");
const user_entity_1 = require("../../entities/user.entity");
const user_interface_1 = require("../../entities/user.interface");
const typeorm_2 = require("typeorm");
let UsersHelperService = class UsersHelperService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.roleChoice = user_entity_1.UserRole.EMPLOYEE;
    }
    createUserDtoToEntity(createUserDto) {
        const dateOfB = new Date(createUserDto.dateOfBirth);
        if (createUserDto.role == 'employee') {
            this.roleChoice = user_entity_1.UserRole.EMPLOYEE;
        }
        else {
            this.roleChoice = user_entity_1.UserRole.EMPLOYER;
        }
        return (0, rxjs_1.of)({
            email: createUserDto.email,
            username: createUserDto.username,
            password: createUserDto.password,
            firstName: this.capitalizeFirstLetter(createUserDto.firstName),
            lastName: this.capitalizeFirstLetter(createUserDto.lastName),
            dateOfBirth: new Date(dateOfB),
            phoneNumber: createUserDto.phoneNumber,
            role: this.roleChoice,
            city: createUserDto.city,
            tierLevel: createUserDto.tierLevel
        });
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    findByEmail(email) {
        return this.userRepository.findOne({ email });
    }
    loginuserDtoToEntity(loginUserDto) {
        return {
            email: loginUserDto.email,
            password: loginUserDto.password,
        };
    }
};
UsersHelperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersHelperService);
exports.UsersHelperService = UsersHelperService;
//# sourceMappingURL=users-helper.service.js.map