/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema()
export class History {
  @Prop()
  name: string;

  @Prop()
  score: number;
}

export const HistorySchema = SchemaFactory.createForClass(History);
