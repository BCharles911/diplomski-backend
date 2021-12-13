"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_helper_service_1 = require("./service/users-helper/users-helper.service");
const users_service_1 = require("./service/users.service");
const auth_module_1 = require("../auth/auth.module");
const config_1 = require("@nestjs/config");
const city_entity_1 = require("./entities/city.entity");
const rank_service_1 = require("./service/rank/rank.service");
const rank_entity_1 = require("./entities/rank.entity");
const city_service_1 = require("./service/city/city.service");
const job_posts_module_1 = require("../job-posts/job-posts.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, city_entity_1.City, rank_entity_1.Rank,]),
            (0, common_1.forwardRef)(() => job_posts_module_1.JobPostsModule),
            auth_module_1.AuthModule,
        ],
        exports: [typeorm_1.TypeOrmModule, users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, rank_service_1.RankService, users_helper_service_1.UsersHelperService, config_1.ConfigService, rank_service_1.RankService, city_service_1.CityService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map