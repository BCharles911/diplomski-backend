import { Module } from '@nestjs/common';
import { UserSkillsService } from './user-skills.service';
import { UserSkillsController } from './user-skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSkill } from './entities/user-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSkill])],
  exports: [TypeOrmModule],
  controllers: [UserSkillsController],
  providers: [UserSkillsService]
})
export class UserSkillsModule {}
