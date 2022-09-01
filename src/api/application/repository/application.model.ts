import { Connection } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_CONNECTIONS, MODEL_PROVIDERS } from '../../../constants';
import { ApplicationEntity } from '../../../database/entitites/application.entity';

export const ApplicationSchema = SchemaFactory.createForClass(ApplicationEntity);

export const ApplicationModel = {
  provide: MODEL_PROVIDERS.Application,
  useFactory: (connection: Connection) => connection.model(MODEL_PROVIDERS.Application, ApplicationSchema),
  inject: [DATABASE_CONNECTIONS.APPLICATION.provider],
};
