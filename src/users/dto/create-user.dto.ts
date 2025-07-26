import { IsEnum, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    description: 'Username for the user account',
    example: 'john_doe',
    type: String,
  })
  @IsString()
  username: string

  @ApiProperty({
    description: 'Password for the user account',
    example: 'password123',
    type: String,
  })
  @IsString()
  password: string
}
