import { UsersService } from './services';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/database/users/models';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
