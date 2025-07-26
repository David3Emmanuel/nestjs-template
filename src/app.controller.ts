import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger'

class WelcomeMessage {
  @ApiProperty({ description: 'The welcome message' })
  message: string
}

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns a welcome message.',
    type: WelcomeMessage,
  })
  getHello() {
    return this.appService.getHello()
  }

  @Get('health')
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({ status: 200, description: 'Application is healthy' })
  getHealth(): { status: string; timestamp: string; uptime: number } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    }
  }
}
