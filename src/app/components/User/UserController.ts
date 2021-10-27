import { Request } from 'express';
import { UserService } from './UserService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, JsonResponse, Post } from 'decorators/controller';
import { RequireAuthentication, RequireAuthorization } from 'middleware/Authentication';
import { ControllerInterface } from 'interfaces/ControllerInterface';

@autoInjectable()
@Controller('/users')
@RequireAuthentication()
export class UserController implements ControllerInterface {

  constructor(private userService: UserService) {}

  @Get('/')
  @RequireAuthorization('admin')
  @JsonResponse()
  public async index() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  @JsonResponse()
  public async show(req: Request) {
    const { id } = req.params;
    return await this.userService.findById(+id);
  }

  @Post('/')
  @JsonResponse()
  public async create(req: Request) {
    const { body } = req;
    return await this.userService.create(body);
  }
}