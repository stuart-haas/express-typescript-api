import { IndexRepository } from './IndexRepository';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, TextResponse } from 'core/http';
import { IController } from 'core/interfaces/IController';

@autoInjectable()
@Controller('/')
export class IndexController implements IController {

  constructor(private indexRepository: IndexRepository) {}

  @Get('')
  @TextResponse()
  public async hello() {
    return await this.indexRepository.hello();
  }
}