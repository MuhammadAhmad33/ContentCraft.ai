import { Body, Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { ContentGeneratorService } from '../app.service';
import { jwtConstants } from './constants';
import { User } from '../schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userdto } from 'src/dtos/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private ContentGeneratorService: ContentGeneratorService,
        private jwtService: JwtService,
        @InjectModel('User') private userModel: Model<User>,
    ) { }

    async validateuser(username: string, password: string): Promise<any> {
        const user = await this.ContentGeneratorService.find(username);
        console.log(user, 'auth');
        if (user.password === password) {
            const payload = { id: user._id, username: user.username };
            console.log(payload)
            return {
                access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret }),
            };
        }
    }


    async newuser(createuser: userdto): Promise<any> {
        const user = await this.userModel.create(createuser);
        console.log(user)
        const payload = { id: user._id };
        console.log(payload)
        return {
            access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret }),
        };

    }
}