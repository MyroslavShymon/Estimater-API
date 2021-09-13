import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from 'src/database/projects/models';
import { User } from 'src/database/users/models';
import { ProjectsController } from './controllers';
import { ProjectsSearchService, ProjectsService } from './services';

@Module({
  providers: [ProjectsService, ProjectsSearchService],
  controllers: [ProjectsController],
  imports: [SequelizeModule.forFeature([Project, User])],
})
export class ProjectsModule {}
