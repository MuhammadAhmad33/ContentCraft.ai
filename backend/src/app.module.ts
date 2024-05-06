import { Module } from '@nestjs/common';
import { Gpt2Controller } from './app.controller';
import { ContentGeneratorService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { User, UserSchema } from './schemas/users.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ahmaadd7:ahmadahmad@cluster0.bzvgqet.mongodb.net/'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule
  ],
  controllers: [Gpt2Controller],
  providers: [ContentGeneratorService, AuthService]
})
export class AppModule { }
