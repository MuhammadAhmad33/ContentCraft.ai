import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Specify the origin to allow cross-origin requests
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and HTTP authentication
  });
  const port = 3001;
  await app.listen(port, () => {
    Logger.log(`Server started on port ${port}`);
  });
}
bootstrap();
