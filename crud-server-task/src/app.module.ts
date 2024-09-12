import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HelpersModule } from './helpers/helpers.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TasksModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HelpersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
