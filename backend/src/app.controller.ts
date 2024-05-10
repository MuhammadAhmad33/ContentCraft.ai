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

  // private Host = '127.0.0.1';
  // private Port = 5000;

  @Post('generateText')
  async generateText(@Body('prompt') prompt: any): Promise<string[]> {
    try {
      console.log('received prompt:', prompt);
      // Construct the URL using the host and port of the Flask API
      const flaskApiUrl = 'http://127.0.0.1:5000/generate_content';
  
      // Send the POST request to the Flask API
      const response = await axios.post(flaskApiUrl, { prompt });


      // Return the response data
      console.log(response.data);
      return response.data.generated_content;
    } catch (error) {
      // Handle errors appropriately
      throw new Error('Failed to send request to Flask API: ' + error.message);
    }
  }
}
