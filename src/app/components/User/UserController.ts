import { Request, Response } from 'express';
import { UserService } from './UserService';
import { autoInjectable } from 'tsyringe';
import { Controller } from '@decorators/Controller';
import { Get, Post } from '@decorators/Route';

@autoInjectable()
@Controller('/users')
export class UserController {

  constructor(private userService: UserService) {}

  @Get('/')
  public async index(req: Request, res: Response) {
    const users = await this.userService.findAll();
    return res.json({ data: users });
  }

  @Get('/:id')
  public async show(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.userService.findById(+id);
    return res.json({ data: user });
  }

  @Post('/')
  public async create(req: Request, res: Response) {
    const { body } = req;
    const user = await this.userService.create(body);
    return res.json({ data: user });
  }
}