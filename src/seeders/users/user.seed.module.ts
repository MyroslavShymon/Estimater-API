import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/database/users/models';
import { UserSeedService } from './user.seed.service';

@Module({
  providers: [UserSeedService],
  exports: [UserSeedService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UserSeederModule {}
