import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


@Schema(
    { timestamps: true }
)

export class Content {

  @Prop()
  Response: string;

  @Prop()
  dateTime: string;
}

export const NoteSchema = SchemaFactory.createForClass(Content);
