import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return 'Hello! Please send us your report.';
  }
}
