/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHistoryDto } from './dto/create-history.dto';
import { History, HistoryDocument } from './schemas/history.schema';

@Injectable()
export class HistoryService {
  constructor(@InjectModel(History.name) private historyModel: Model<HistoryDocument>) {}
  
  async create(createHistoryDto: CreateHistoryDto): Promise<History> {
    return new this.historyModel(createHistoryDto).save();
  }

  getAll(): string[] {
    return ['valor1', 'valor2'];
  }

  //getById
  getById(id: string): string {
    return `El valor del id es ${id}`;
  }

  //update(id: number) {
  //  return `This action updates a #${id} history`;
  //}

  //remove(id: number) {
  //  return `This action removes a #${id} history`;
  //}
}
