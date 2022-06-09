import { Controller, Get, Post, Param } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create() {
    return this.historyService.create();
  }

  @Get()
  findAll() {
    return this.historyService.getAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    return this.historyService.getById(params.id);
  }
}
