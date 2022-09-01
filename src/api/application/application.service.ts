import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ERRORS } from '../../constants';
import { ApplicationRepositoryService } from './repository/application.repository.service';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { FilterApplicationDto } from './dto/filter-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    private applicationRepo: ApplicationRepositoryService,
  ) {}

  async create(createApplicationDto: CreateApplicationDto) {
    const application = await this.applicationRepo.create({ ...createApplicationDto });

    return application;
  }

  async findById(id: string, fields?: string) {
    const application = await this.applicationRepo.findById(id, fields);

    if (!application) {
      throw new BadRequestException(ERRORS.INVALID_APPLICATION);
    }

    return application;
  }

  async filter(filterApplicationDto: FilterApplicationDto) {
    return this.applicationRepo.filter(filterApplicationDto);
  }

  async update(id: string, updateApplicationDto: UpdateApplicationDto) {
    const {
      name,
      surname,
      birthdate,
      gender,
      relationInfo,
      status,
    } = updateApplicationDto;

    const application = await this.applicationRepo.findByIdAndUpdate(
      id,
      name,
      surname,
      birthdate,
      gender,
      status,
      relationInfo,
    );

    return application;
  }

  // async approved(id: string) {
  //   const application = await this.applicationRepo.findByIdAndUpdatee(
  //     id,
  //     200,
  //   );

  //   return application;
  // }

  // async reject(id: string) {
  //   const application = await this.applicationRepo.findByIdAndUpdatee(
  //     id,
  //     300,
  //   );

  //   return application;
  // }
}
