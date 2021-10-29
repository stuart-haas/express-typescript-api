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
  public async findAll() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  @JsonResponse()
  public async findById(@Param('id') id: number) {
    return await this.userService.findById(id);
  }

  @Post('/')
  @JsonResponse()
  public async create(@Body() user: User) {
    return await this.userService.create(user);
  }

  @Put('/:id')
  @JsonResponse()
  public async updateById(@Param('id') id: number, @Body() user: User) {
    return await this.userService.updateById(id, user);
  }

  @Delete('/:id')
  @JsonResponse()
  public async deleteById(@Param('id') id: number) {
    return await this.userService.deleteById(id);
  }
}