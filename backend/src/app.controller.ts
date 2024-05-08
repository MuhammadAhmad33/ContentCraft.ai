import { Controller, Post, Body } from '@nestjs/common';
import { ContentGeneratorService } from './app.service';
import axios from 'axios';
import { userdto } from './dtos/user.dto';
import { AuthService } from './auth/auth.service';
@Controller('gpt2')
export class Gpt2Controller {

  constructor(private readonly ContentGeneratorService: ContentGeneratorService,
    private readonly AuthService: AuthService,

  ) { }

  @Post('login')
  findone(@Body() req: userdto): any {
      console.log('req', req)
      return this.AuthService.validateuser(req.username, req.password);
  }

  @Post('createUser')
  createUser(@Body() data: userdto): any {
    return this.AuthService.newuser(data);
  }

  private fastapiHost = '127.0.0.1';
  private fastapiPort = 8000;

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
