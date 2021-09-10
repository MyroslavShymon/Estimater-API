import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/core/dtos';
import { User } from 'src/database/users/models';
import { users } from './data';

@Injectable()
export class UserSeedService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  create(): Promise<User>[] {
    return users.map(async (userSeed: CreateUserDto) => {
      const user = await this.userRepository.findOne({
        where: { email: userSeed.email },
      });
      if (user) {
        return Promise.resolve(null);
      }
      return await this.userRepository.create(userSeed);
    });
  }
}
