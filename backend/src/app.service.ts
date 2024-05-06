import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContentGeneratorService {
  constructor(@InjectModel('User') private userModel: Model<User>,){}
  //finduser
  async find(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username }).exec();
    console.log(user, 'service');
    if (!user) {
        throw new NotFoundException('User not found');
    }
    console.log('logged in')
    return user;
}
}
