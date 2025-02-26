import { Injectable } from '@nestjs/common';

export const APP_SERVICE = Symbol('APP_SERVICE');

export interface AppService {
  healthCheck(): { timestamp: number };
}

@Injectable()
export class AppServiceImpl {
  healthCheck(): { timestamp: number } {
    return { timestamp: Date.now() };
  }
}
