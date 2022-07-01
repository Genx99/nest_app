import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto) {
    await this.historyService.create(createHistoryDto);
  }

  @Get()
  async findAll() {
    return this.historyService.getAll();
  }

  @Get(':id')
  async findOne(@Param() params) {
    return this.historyService.getById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.historyService.delete(params.id);
  }
}
