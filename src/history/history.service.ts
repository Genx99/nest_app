import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
  create(): string {
    return 'Create OK';
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
