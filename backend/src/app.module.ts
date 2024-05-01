import { Module } from '@nestjs/common';
import { Gpt2Controller } from './app.controller';
import { Gpt2Service  } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ahmaadd7:ahmadahmad@cluster0.bzvgqet.mongodb.net/')],
  controllers: [Gpt2Controller],
  providers: [Gpt2Service ],
})
export class AppModule {}
