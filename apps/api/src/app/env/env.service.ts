import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Env, NodeEnv } from './env.model';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService<Env>) {}

  get nodeEnv(): NodeEnv {
    return this.configService.get('NODE_ENV', { infer: true })!;
  }

  get host(): string {
    return this.configService.get('API_HOST', { infer: true })!;
  }

  get port(): number {
    return this.configService.get('API_PORT', { infer: true })!;
  }

  get globalPrefix(): string {
    return this.configService.get('API_GLOBAL_PREFIX', { infer: true })!;
  }

  get cookieSecret(): string {
    return this.configService.get('API_COOKIE_SECRET', { infer: true })!;
  }

  get mongodbURI(): string {
    return this.configService.get('API_MONGODB_URI', { infer: true })!;
  }
}
