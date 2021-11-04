import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSkillsService } from './user-skills.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';

@Controller('user-skills')
export class UserSkillsController {
  constructor(private readonly userSkillsService: UserSkillsService) {}

  @Post()
  create(@Body() createUserSkillDto: CreateUserSkillDto) {
    return this.userSkillsService.create(createUserSkillDto);
  }

  @Get()
  findAll() {
    return this.userSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSkillDto: UpdateUserSkillDto) {
    return this.userSkillsService.update(+id, updateUserSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSkillsService.remove(+id);
  }
}
