import { Prop, raw, Schema } from '@nestjs/mongoose';
import { CONSTANTS } from '../../constants';

@Schema({ timestamps: true })
export class ApplicationEntity {
  _id?: string;

  @Prop({ type: String })
    name: string;

  @Prop({ type: String })
    surname: string;

  @Prop({ type: Date })
    birthdate: string;

  @Prop({ type: Number })
    gender: number;

  @Prop(raw({
    name: { type: String },
    phoneNumber: { type: String },
    dagree: { type: Number },
  }))
    relationInfo?:any;

  @Prop({ type: Number, default: CONSTANTS.APPLICATION_STATUS.RECIEVED })
    status: number;
}
