import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class Gpt2Service {
  constructor(private readonly httpService: HttpService) {}

  async generateText(prompt: string): Promise<string[]> {
    try {
      const response = await this.httpService
        .post('http://your-fastapi-server-url/generate_text/', { prompt })
        .toPromise();

      return response.data.generated_texts;
    } catch (error) {
      throw new Error('Failed to generate text: ' + error.message);
    }
  }
}
