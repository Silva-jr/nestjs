import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TweetsModule } from './tweets/tweets.module';
import {ScheduleModule} from '@nestjs/schedule';
import {BullModule} from '@nestjs/bull';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    BullModule.forRoot({
      redis:{
        host: 'redis',
        port: 6379
      }
    }),
    TweetsModule,
    ScheduleModule.forRoot(),
    MailingModule
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
