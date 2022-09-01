import { Module } from '@nestjs/common';
import { ApplicationModel } from './application.model';
import { ApplicationRepositoryService } from './application.repository.service';
import { ApplicationDatabaseModule } from '../../../database/application-database.module';

@Module({
  imports: [ApplicationDatabaseModule],
  providers: [ApplicationModel, ApplicationRepositoryService],
  exports: [ApplicationRepositoryService],
})
export class ApplicationRepositoryModule {}
