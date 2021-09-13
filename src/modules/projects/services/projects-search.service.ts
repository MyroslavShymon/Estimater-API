import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from 'src/database/projects/models';
import { SearchProjectDto } from '../dtos/search-project.dto';

@Injectable()
export class ProjectsSearchService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async searchProjectOrGetAll(dto: SearchProjectDto) {
    const { searchString } = dto;
    try {
      if (searchString) {
        return this.allProjectsBySearchString(searchString);
      }
      this.getAllProjects();
    } catch (error) {
      throw new HttpException(
        `Bad request with error: ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async allProjectsBySearchString(searchString: string) {
    const allFoundProjects = await this.projectRepository.findAll({
      where: { title: searchString },
    });
    if (allFoundProjects.length) return allFoundProjects;
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: `there is no projects with title ${searchString}`,
      },
      HttpStatus.NOT_FOUND,
    );
  }

  async getAllProjects() {
    const allProjects = await this.projectRepository.findAll();
    if (allProjects.length) {
      return allProjects;
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: `there is no projects`,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
