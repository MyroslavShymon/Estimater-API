import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    example: 'Done projects module',
    description: 'Projects title',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Done projects module services and controllers',
    description: 'Projects description',
  })
  readonly description: string;

  @ApiProperty({
    example: '1',
    description: 'Author id for project',
  })
  readonly authorId: number;
}
