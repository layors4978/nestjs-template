import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { APP_SERVICE, AppServiceImpl } from './app.service';

const modules = [
  {
    provide: APP_SERVICE,
    useClass: AppServiceImpl,
  },
];

@Module({
  imports: [],
  controllers: [AppController],
  providers: modules,
})
export class AppModule {}
