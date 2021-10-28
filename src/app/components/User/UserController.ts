import { Request } from 'express';
import { UserService } from './UserService';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, JsonResponse, Post, Body, Param, Put, Delete } from 'decorators/controller';
import { RequireAuthentication, RequireAuthorization } from 'middleware/Authentication';
import { ControllerInterface } from 'interfaces/ControllerInterface';
import { User } from 'app/entity/User';

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
  public async show(@Param('id') id: number) {
    return await this.userService.findById(id);
  }

  @Post('/')
  @JsonResponse()
  public async create(@Body() user: User) {
    return await this.userService.create(user);
  }

  @Put('/:id')
  @JsonResponse()
  public async update(@Param('id') id: number, @Body() user: User) {
    return await this.userService.update(id, user);
  }

  @Delete('/:id')
  @JsonResponse()
  public async destroy(@Param('id') id: number) {
    return await this.userService.destroy(id);
  }
}