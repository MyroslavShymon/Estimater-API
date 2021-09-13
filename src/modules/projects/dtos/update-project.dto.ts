import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto {
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
}
