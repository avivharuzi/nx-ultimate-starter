import compression from '@fastify/compress';
import fastifyCookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { EnvService } from './app/env';

(async (): Promise<void> => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const { host, port, cookieSecret, globalPrefix } = app.get(EnvService);

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.enableCors();
  await app.register(helmet);

  await app.register(fastifyCookie, {
    secret: cookieSecret,
  });

  await app.register(compression, {
    encodings: ['gzip', 'deflate'],
  });

  await app.listen(port, host);

  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
})();
