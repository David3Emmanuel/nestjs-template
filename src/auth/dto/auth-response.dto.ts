import { ApiProperty } from '@nestjs/swagger'

export class UserResponseDto {
  @ApiProperty({ description: 'User ID' })
  id: number

  @ApiProperty({ description: 'Username' })
  username: string
}

export class LoginResponseDto {
  @ApiProperty({ description: 'JWT access token' })
  access_token: string

  @ApiProperty({ description: 'User information', type: UserResponseDto })
  user: UserResponseDto
}

export class SignupResponseDto {
  @ApiProperty({ description: 'Success message' })
  message: string
}
