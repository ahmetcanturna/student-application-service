import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApplicationEntity } from '../../../database/entitites/application.entity';
import { MODEL_PROVIDERS } from '../../../constants';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { FilterApplicationDto } from '../dto/filter-application.dto';

@Injectable()
export class ApplicationRepositoryService {
  constructor(
    @Inject(MODEL_PROVIDERS.Application)
    private applicationModel: Model<ApplicationEntity>,
  ) {}

  async create(applicationDto: CreateApplicationDto) {
    return (await this.applicationModel.create(applicationDto)).toObject();
  }

  async findById(id: string, fields?: string):Promise<ApplicationEntity> {
    return this.applicationModel.findById(id).select(fields).lean().exec();
  }

  async filter(filterApplicationDto: FilterApplicationDto):Promise<Array<ApplicationEntity>> {
    const {
      name,
      surname,
      birthdate,
      gender,
      status,
    } = filterApplicationDto;

    return this.applicationModel.find({
      ...(name ? { name } : undefined),
      ...(surname ? { surname } : undefined),
      ...(birthdate ? { birthdate } : undefined),
      ...(gender ? { gender } : undefined),
      ...(status ? { status } : undefined),
    }).lean().exec();
  }

  async findByIdAndUpdate(
    id: string,
    name: string,
    surname: string,
    birthdate: string,
    gender: number,
    status: number,
    relationInfo: any,
  ):Promise<ApplicationEntity> {
    return this.applicationModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...(name ? { name } : undefined),
            ...(surname ? { surname } : undefined),
            ...(birthdate ? { birthdate } : undefined),
            ...(gender ? { gender } : undefined),
            ...(status ? { status } : undefined),
            ...(relationInfo ? { relationInfo } : undefined),
          },
        },
        { new: true },
      )
      .lean()
      .exec();
  }

  async findByIdAndUpdatee(
    id: string,
    status : number,
  ):Promise<ApplicationEntity> {
    return this.applicationModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...(status ? { status } : undefined),
          },
        },
        { new: true },
      )
      .lean()
      .exec();
  }
}
