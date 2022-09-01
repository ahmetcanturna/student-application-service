import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [HealthModule, ApplicationModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
