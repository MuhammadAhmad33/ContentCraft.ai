import { Controller, Post, Body } from '@nestjs/common';
import { Gpt2Service } from './app.service';
import axios from 'axios';

@Controller('gpt2')
export class Gpt2Controller {
  // Define the host and port for the FastAPI server
  private fastapiHost = '127.0.0.1';  // Update with the actual FastAPI host
  private fastapiPort = 8000;        // Update with the actual FastAPI port

  constructor(private readonly gpt2Service: Gpt2Service) { }

  @Post('generateText')
  async generateText(@Body('prompt') prompt: string): Promise<string[]> {
    try {
      console.log('received prompt:', prompt);
      // Construct the URL using the host and port
      const url = `http://${this.fastapiHost}:${this.fastapiPort}/generate_text/`;

      // Send the POST request to the FastAPI server
      const response = await axios.post(url, { prompt });

      // Return the response data
      console.log(response.data)
      return response.data;
    } catch (error) {
      // Handle errors appropriately
      throw new Error('Failed to send request to FastAPI: ' + error.message);
    }
  }
}
