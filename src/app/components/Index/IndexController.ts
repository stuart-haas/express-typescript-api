import { IndexService } from './IndexService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, TextResponse } from 'core/decorators/http';
import { IController } from 'core/interfaces/IController';

@autoInjectable()
@Controller('/')
export class IndexController implements IController {

  constructor(private indexService: IndexService) {}

  @Get('')
  @TextResponse()
  public async hello() {
    return await this.indexService.hello();
  }
}