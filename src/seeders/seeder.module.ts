import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostgreDatabaseProviderModule } from 'src/core/providers/database/provider.module';
import { User } from 'src/database/users/models';
import { Seeder } from './seeder';
import { UserSeederModule } from './users/user.seed.module';
@Module({
  imports: [
    UserSeederModule,

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'estimater',
      models: [User],
      autoLoadModels: true,
    }),
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}

console.log(process.env.POSTGRES_HOST);
