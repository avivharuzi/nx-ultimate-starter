import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvModule, EnvService, envValidate } from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: envValidate,
    }),
    EnvModule,
    MongooseModule.forRootAsync({
      useFactory: async (envService: EnvService) => {
        return {
          uri: envService.mongodbURI,
        };
      },
      inject: [EnvService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
