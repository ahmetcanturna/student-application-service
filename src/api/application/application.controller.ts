import {
  Controller, Post, Body, Param, Get, Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { FilterApplicationDto } from './dto/filter-application.dto';

@ApiTags('application')
@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Gets application by id.',
  })
  async get(@Param('id') id: string) {
    return this.applicationService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Creates application.',
  })
  async create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationService.create(createApplicationDto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Updates application.',
  })
  async update(
  @Body() updateApplicationDto: UpdateApplicationDto,
    @Param('id') id: string,
  ) {
    return this.applicationService.update(id, updateApplicationDto);
  }

  @Post('filter')
  @ApiOperation({
    summary: 'Filters application by given parameters',
  })
  async filter(@Body() filterApplicationDto: FilterApplicationDto) {
    return this.applicationService.filter(filterApplicationDto);
  }

  // @Put('approve/:id')
  // @ApiOperation({
  //   summary: 'Approves application.',
  // })
  // async approve(
  // @Param('id') id: string,
  // ) {
  //   return this.applicationService.approve(id);
  // }

  // @Put('reject/:id')
  // @ApiOperation({
  //   summary: 'Rejects application.',
  // })
  // async reject(
  // @Param('id') id: string,
  // ) {
  //   return this.applicationService.reject(id);
  // }
}
