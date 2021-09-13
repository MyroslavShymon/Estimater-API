import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from 'src/database/projects/models';
import { CreateProjectDto, UpdateProjectDto } from '../dtos';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async createProject(dto: CreateProjectDto) {
    const project = await this.projectRepository.create(dto);
    return project;
  }

  async updateProject(dto: UpdateProjectDto, id: number) {
    const { title, description } = dto;

    try {
      await this.projectRepository.update(
        { title: title, description: description },
        { where: { id } },
      );
    } catch (error) {
      throw new HttpException(
        `Bad request with error: ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getProjectById(id: number): Promise<Project | string> {
    try {
      const project: Project = await this.projectRepository.findOne({
        where: { id },
      });

      if (project) {
        return project;
      }
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `project with id: ${id} is not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    } catch (error) {
      throw new HttpException(
        `Bad request with error: ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
