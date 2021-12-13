import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from 'src/skills/entities/skill.entity';
import { SkillsService } from 'src/skills/skills.service';
import { UsersService } from 'src/users/service/users.service';
import { Repository } from 'typeorm';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
import { JobPostSkills } from './entities/job-post-skills.entity';
import { JobPost } from './entities/job-post.entity';

@Injectable()
export class JobPostsService {

  skills: Skill[] = [];
  constructor(@InjectRepository(JobPost) private repository: Repository<JobPost>,
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
    @Inject(forwardRef(() => SkillsService)) private skillsService: SkillsService,
    @InjectRepository(JobPostSkills) private jobPostSkillsRepository: Repository<JobPostSkills>,
  ) { }
  async create(createJobPostDto: CreateJobPostDto, id: string) {
    await this.usersService.findOne(id).then(user => {
      createJobPostDto.user = user;
      this.repository.save(createJobPostDto).then(newJobPost => {
        createJobPostDto.jobPostSkills.forEach(skill => {
          this.skillsService.getById(skill.id).then(result => {
            this.jobPostSkillsRepository.save(new JobPostSkills(newJobPost, result))
          });
        });
      });
    });
  }

  findAll() {
    return this.repository.find({
      relations: ["user", "requests", "jobPostSkills"]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} jobPost`;
  }

  update(id: number, updateJobPostDto: UpdateJobPostDto) {
    return `This action updates a #${id} jobPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPost`;
  }


}
