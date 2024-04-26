import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {Prompt} from '../dtos/prompt.dto';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: Types.ObjectId;

  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ type: [Prompt], default: [] })
  notes: Prompt[];
}

export const UserSchema = SchemaFactory.createForClass(User);
