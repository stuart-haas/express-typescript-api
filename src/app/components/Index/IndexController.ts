import { IndexRepository } from './IndexRepository';
import { injectable } from 'tsyringe';
import { Controller, Get, TextResponse } from 'core/http';
import { IController } from 'core/interfaces/IController';

@injectable()
@Controller('/')
export class IndexController implements IController {

  constructor(private indexRepository: IndexRepository) {}

  @Get('')
  @TextResponse()
  public async hello() {
    return await this.indexRepository.hello();
  }
}