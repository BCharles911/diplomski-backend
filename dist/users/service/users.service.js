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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const rxjs_1 = require("rxjs");
const auth_service_1 = require("../../auth/services/auth/auth.service");
const job_posts_service_1 = require("../../job-posts/job-posts.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const city_service_1 = require("./city/city.service");
let UsersService = class UsersService {
    constructor(userRepository, cityService, authService, postService) {
        this.userRepository = userRepository;
        this.cityService = cityService;
        this.authService = authService;
        this.postService = postService;
    }
    async create(newUser) {
        try {
            await this.cityService.create(newUser.city).then(city => newUser.city = city);
            console.log(newUser);
            const mailExists = await this.mailExists(newUser.email);
            const usernameExists = await this.usernameExists(newUser.username);
            const phoneNumberExists = await this.phoneNumberExists(newUser.phoneNumber);
            if (!mailExists && !usernameExists && !phoneNumberExists) {
                const passwordHash = await this.hashPassword(newUser.password);
                newUser.password = passwordHash;
                await this.userRepository.save(this.userRepository.create(newUser)).catch(err => console.log(err));
                return;
            }
            else if (mailExists && usernameExists && phoneNumberExists) {
                throw new common_1.HttpException('Your email, username and number already exists, check if you alreday created profile!', common_1.HttpStatus.CONFLICT);
            }
            else if (phoneNumberExists) {
                throw new common_1.HttpException('Phone number already in use', common_1.HttpStatus.CONFLICT);
            }
            else if (usernameExists) {
                throw new common_1.HttpException('Username already in use', common_1.HttpStatus.CONFLICT);
            }
            else {
                throw new common_1.HttpException('Email is already taken', common_1.HttpStatus.CONFLICT);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.CONFLICT);
        }
    }
    hashPassword(password) {
        return this.authService.hashPassword(password);
    }
    async findOne(id) {
        return this.userRepository.findOne({ id });
    }
    getOne(id) {
        return this.userRepository.findOneOrFail({ id });
    }
    async mailExists(email) {
        const user = await this.userRepository.findOne({
            email
        });
        if (user) {
            console.log('user exists');
            return true;
        }
        else {
            console.log('user does not exist');
            return false;
        }
    }
    async usernameExists(username) {
        const user = await this.userRepository.findOne({ username });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    async phoneNumberExists(phoneNumber) {
        const user = await this.userRepository.findOne({ phoneNumber });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    findAll(options) {
        return (0, rxjs_1.from)((0, nestjs_typeorm_paginate_1.paginate)(this.userRepository, options));
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        console.log('aaa');
        return `This action removes a #${id} user`;
    }
    async findByEmail(email) {
        return this.userRepository.findOne({
            email
        }, {
            select: ['id', 'email', 'username', 'password']
        });
    }
    async login(user) {
        try {
            const foundUser = await this.findByEmail(user.email.toLowerCase());
            if (foundUser) {
                const matches = await this.validatePassword(user.password, foundUser.password);
                if (matches) {
                    const payload = await this.findOne(foundUser.id);
                    return this.authService.generateJwt(payload);
                }
                else {
                    throw new common_1.HttpException('Login was not successfull, wrong credentials', common_1.HttpStatus.UNAUTHORIZED);
                }
            }
            else {
                throw new common_1.HttpException('Login was not successfull, wrong credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        catch (_a) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async validatePassword(password, storedPasswordHash) {
        return this.authService.comparePasswords(password, storedPasswordHash);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => job_posts_service_1.JobPostsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        city_service_1.CityService,
        auth_service_1.AuthService,
        job_posts_service_1.JobPostsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map