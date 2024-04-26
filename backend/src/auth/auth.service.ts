// import { Body, Injectable, NotAcceptableException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt'
// import { UserService } from '../braindrafts/users.service';
// import { jwtConstants } from './constants';
// import { User } from '../schemas/users.schema';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Note } from '../schemas/notes.schema';
// import { CreateUserDto } from 'src/dtos/users.dto';

// @Injectable()
// export class AuthService {
//     constructor(
//         private usersService: UserService,
//         private jwtService: JwtService,
//         @InjectModel('User') private userModel: Model<User>,
//         @InjectModel('Note') private userNote: Model<Note>
//     ) {}

//     async validateuser(username: string, password: string): Promise<any> {
//         const user = await this.usersService.find(username);
//         console.log(user, 'auth');
//         if (user.password === password) {
//             const payload = { id: user._id, username: user.username };
//             console.log(payload)
//             return {
//                 access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret }),
//             };
//         }
//     }
    
    
//     async newuser(createuser: CreateUserDto): Promise<any> {
//         const user = await this.userModel.create(createuser);
//         console.log(user)
//         const payload = { id:user._id};
//             console.log(payload )
//             return {
//                 access_token: this.jwtService.sign(payload, {secret: jwtConstants.secret }),
//             };
        
//         }
// }