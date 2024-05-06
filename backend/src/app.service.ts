import { Injectable } from '@nestjs/common';

@Injectable()
export class Gpt2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
