import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Jwtstratergy } from './jwt.stratergy';
import { AuthGuard } from './loacl-auth.guard';
import { User, UserSchema } from 'src/schemas/users.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    })
  ],
  providers: [Jwtstratergy],
 
})
export class AuthModule { }
