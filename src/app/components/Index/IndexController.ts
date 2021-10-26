import { IndexService } from './IndexService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, TextResponse } from '@decorators/controller';

@autoInjectable()
@Controller({ prefix: '/' })
export class IndexController {

  constructor(private indexService: IndexService) {}

  @Get('')
  @TextResponse()
  public async get() {
    return await this.indexService.get();
  }
}