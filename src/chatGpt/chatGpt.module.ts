import { Module } from "@nestjs/common";
import { ChatGptService } from "./service/chatGpt.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from '@nestjs/config';
import { ChatGptController } from "./controller/chatGpt.controller";

@Module({
    imports: [
        HttpModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
        })],
    providers: [ChatGptService],
    controllers: [ChatGptController],
    exports: [ChatGptService],
})
export class ChatGptodule { }