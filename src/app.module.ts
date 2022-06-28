/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [HistoryModule, MongooseModule.forRoot('mongodb://localhost/history')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
