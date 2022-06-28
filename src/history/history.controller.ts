import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
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
