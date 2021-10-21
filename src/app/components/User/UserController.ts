import { Request, Response } from 'express';
import { UserService } from './UserService';
import { autoInjectable } from 'tsyringe';
import { Controller } from '@app/decorators/Controller';
import { Get, Post } from '@app/decorators/Route';

@autoInjectable()
@Controller('/users')
export class UserController {

  constructor(private userService: UserService) {}

  @Get('/')
  public async index(req: Request, res: Response) {
    const users = await this.userService.findAll();
    return res.json({ data: users });
  }

  @Post('/')
  public async create(req: Request, res: Response) {
    const { body } = req;
    const user = await this.userService.create(body);
    return res.json({ data: user });
  }
}