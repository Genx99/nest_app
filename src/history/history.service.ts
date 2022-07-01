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

  async getAll(): Promise<History[]> {
    return this.historyModel.find().exec();
  }

  async getById(id: string): Promise<History> {
    return this.historyModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.historyModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
