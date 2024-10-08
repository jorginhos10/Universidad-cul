import { Module } from '@nestjs/common';
import { databaseProviders } from './config';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
