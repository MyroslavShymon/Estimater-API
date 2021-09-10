import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Myroslav', description: 'Name of user' })
  readonly name: string;

  @ApiProperty({ example: 'Shymon', description: 'Surname of user' })
  readonly surname: string;

  @ApiProperty({
    example: 'myroslav.shymon.jetup@gmail.com',
    description: 'Email of user',
  })
  readonly email: string;

  @ApiProperty({
    example: 'dfdfhsfghst',
    description: 'Password of user',
  })
  readonly password: string;
}
