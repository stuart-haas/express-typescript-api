import { IndexService } from './IndexService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, TextResponse } from 'decorators/controller';
import { ControllerInterface } from 'interfaces/ControllerInterface';

@autoInjectable()
@Controller('/')
export class IndexController implements ControllerInterface {

  constructor(private indexService: IndexService) {}

  @Get('')
  @TextResponse()
  public async hello() {
    return await this.indexService.hello();
  }
}