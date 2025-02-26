import { Controller, Get, Inject } from '@nestjs/common';

import { APP_SERVICE, AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(APP_SERVICE)
    private readonly appService: AppService,
  ) {}

  @Get()
  healthCheck(): { timestamp: number } {
    return this.appService.healthCheck();
  }
}
