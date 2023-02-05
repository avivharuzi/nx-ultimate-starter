import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Env, NodeEnv } from './env.model';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService<Env>) {}

  get nodeEnv(): NodeEnv {
    return this.getValue('NODE_ENV');
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === NodeEnv.Development;
  }

  get isProduction(): boolean {
    return this.nodeEnv === NodeEnv.Production;
  }

  get host(): string {
    return this.getValue('API_HOST');
  }

  get port(): number {
    return this.getValue('API_PORT');
  }

  get globalPrefix(): string {
    return this.getValue('API_GLOBAL_PREFIX');
  }

  get cookieSecret(): string {
    return this.getValue('API_COOKIE_SECRET');
  }

  get mongodbURI(): string {
    return this.getValue('API_MONGODB_URI');
  }

  private getValue<T>(key: keyof Env): T {
    return this.configService.get<T>(key, {
      infer: true,
    }) as T;
  }
}
