import { Request, Response } from 'express';
import { IndexService } from './IndexService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get } from '@decorators/controller';

@autoInjectable()
@Controller('/')
export class IndexController {

  constructor(private indexService: IndexService) {}

  @Get('')
  public async get(req: Request, res: Response) {
    const message = await this.indexService.get();
    return res.send(message);
  }
}