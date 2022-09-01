import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { ApplicationRepositoryModule } from './repository/application.repository.module';
import { ServiceCallerModule } from '../../service-caller/service-caller.module';
import { CommonModule } from '../../common/common.module';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService],
  imports: [
    ApplicationRepositoryModule,
    ServiceCallerModule,
    ConfigModule,
    CommonModule,
  ],
  exports: [ApplicationService],
})
export class ApplicationModule {}
