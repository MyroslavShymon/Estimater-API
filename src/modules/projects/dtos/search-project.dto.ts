import { ApiProperty } from '@nestjs/swagger';

export class SearchProjectDto {
  @ApiProperty({
    example: 'Project1',
    description: 'Search string',
  })
  readonly searchString: string;
}
