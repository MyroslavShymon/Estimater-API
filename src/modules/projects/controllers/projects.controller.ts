import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project } from 'src/database/projects/models';
import { CreateProjectDto, UpdateProjectDto } from '../dtos';
import { SearchProjectDto } from '../dtos/search-project.dto';
import { ProjectsSearchService, ProjectsService } from '../services';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(
    private projectService: ProjectsService,
    private projectSerachService: ProjectsSearchService,
  ) {}

  @ApiOperation({ summary: 'Create project' })
  @ApiResponse({ status: 200, type: Project })
  @Post()
  create(@Body() projectDto: CreateProjectDto) {
    return this.projectService.createProject(projectDto);
  }

  @ApiOperation({ summary: 'Update project' })
  @ApiResponse({ status: 200, type: Project })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.updateProject(updateProjectDto, id);
  }

  @ApiOperation({ summary: 'Get one project' })
  @ApiResponse({ status: 200, type: Project })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.projectService.getProjectById(id);
  }

  @ApiOperation({ summary: 'Get all or by search string' })
  @ApiResponse({ status: 200, type: Project })
  @Get()
  getAllOrBySearchString(@Body() searchProjectDto: SearchProjectDto) {
    return this.projectSerachService.searchProjectOrGetAll(searchProjectDto);
  }
}
