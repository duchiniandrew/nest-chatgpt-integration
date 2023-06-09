import { Controller, Get, Query } from "@nestjs/common";
import { ChatGptService } from "../service/chatGpt.service";

@Controller('chatgpt')
export class ChatGptController {
    constructor(private readonly chatGptService: ChatGptService) { }

    @Get()
    askChatGtp(@Query('prompt') prompt: string) {
        return this.chatGptService.generateResponse(prompt)
    }
}