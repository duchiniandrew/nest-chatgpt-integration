import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai'

@Injectable()
export class ChatGptService {
  private readonly apiUrl: string
  private readonly configuration: Configuration
  private readonly openAi: OpenAIApi

  constructor(private readonly configService: ConfigService) {
    this.apiUrl = this.configService.get<string>('OPENAI_API_URL');
    this.configuration = new Configuration({
      apiKey: this.configService.get<string>('OPENAI_API_KEY')
    })
    this.openAi = new OpenAIApi(this.configuration)
  }

  async generateResponse(prompt: string) {
    try {
      const completion = await this.openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: prompt
        }],
      });
      console.log(completion)
      return completion.data.choices[0].message
    }

    catch (error) {
      console.log(error)
      throw error
    }
  }
}