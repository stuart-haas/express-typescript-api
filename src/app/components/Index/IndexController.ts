import { IndexService } from './IndexService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, TextResponse } from 'decorators/controller';
import { BaseControllerInterface } from 'interfaces/BaseControllerInterface';

@autoInjectable()
@Controller({ prefix: '/' })
export class IndexController implements BaseControllerInterface {

  constructor(private indexService: IndexService) {}

  @Get('')
  @TextResponse()
  public async get() {
    return await this.indexService.get();
  }
}