import fastifyCookie from '@fastify/cookie';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { EnvService } from './app/env';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  const { host, port, cookieSecret } = app.get(EnvService);

  await app.register(fastifyCookie, {
    secret: cookieSecret,
  });

  await app.listen(port, host);

  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
};

bootstrap();
