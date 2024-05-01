import { Controller, Post, Body } from '@nestjs/common';
import { Gpt2Service } from './app.service';

@Controller('gpt2')
export class Gpt2Controller {
  constructor(private readonly gpt2Service: Gpt2Service) {}

  @Post('generateText')
  async generateText(@Body('prompt') prompt: string): Promise<string[]> {
    try {
      const generatedTexts = await this.gpt2Service.generateText(prompt);
      return generatedTexts;
    } catch (error) {
      // Handle error appropriately
      throw new Error('Failed to generate text: ' + error.message);
    }
  }
}
