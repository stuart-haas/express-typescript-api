import { Request, Response } from 'express';
import { UserService } from './UserService';
import { autoInjectable } from 'tsyringe';
import { Controller } from '@app/decorators/Controller';
import { Get } from '@app/decorators/Route';

@autoInjectable()
@Controller('/users')
export class UserController {

  constructor(private userService: UserService) {}

  @Get('/')
  public index(req: Request, res: Response) {
    const users = this.userService.getUsers();
    return res.json({ data: users });
  }
}