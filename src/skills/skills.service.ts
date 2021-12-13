import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable
} from '@nestjs/common';
import {
  InjectRepository
} from '@nestjs/typeorm';
import {} from 'rxjs';
import { JobPostsService } from 'src/job-posts/job-posts.service';
import {
  Repository
} from 'typeorm';
import {
  CreateSkillDto
} from './dto/create-skill.dto';
import {
  UpdateSkillDto
} from './dto/update-skill.dto';
import {
  Skill
} from './entities/skill.entity';

const SKILLS = ['Čuvanje dece',
  'Dostava',
  'Prevoz kamionom',
  'Vožnja bicikle',
  'Vozač B kategorija',
  'Rad na računaru',
  'Težak fizički rad',
  'Srednje težak fizički rad',
  'Lagan fizički rad',
  'Baštovanstvo',
  'Električar',
  'Šetnja pasa'
]

@Injectable()
export class SkillsService {

  constructor(
    @InjectRepository(Skill) private readonly skillsRepository: Repository < Skill >,
    @Inject(forwardRef(() => JobPostsService)) private readonly jobPostsService: JobPostsService) {

  }

  async createBulk() {

    await Promise.all(SKILLS.map(async (skillName) => {
      const exists: boolean = await this.nameExists(skillName);
      if (exists) {
        throw new HttpException('already exists', HttpStatus.CONFLICT);
      } else {
        console.log(skillName);
        const newSkill = new Skill(skillName)
        this.skillsRepository.save(this.skillsRepository.create(newSkill))
      }

    }))
  }

  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill';
  }


  private async nameExists(skillName: string): Promise < boolean > {
    const skill = await this.skillsRepository.findOne({
      skillName
    });
    if (skill) {
      return true;
    } else {
      return false;
    }
  }

  findAll() {
    return this.skillsRepository.find()
  }

  getOne(skillName: string): Promise < Skill > {
    return this.skillsRepository.findOneOrFail({
      skillName
    });
  }

  getById(id: string): Promise < Skill > {
    return this.skillsRepository.findOne({id});
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}