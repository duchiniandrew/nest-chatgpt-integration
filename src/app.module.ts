import { Module } from '@nestjs/common';
import { ChatGptodule } from './chatGpt/chatGpt.module';

@Module({
  imports: [ChatGptodule],
  controllers: [],
  providers: [],
})
export class AppModule {}
