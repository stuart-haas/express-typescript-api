import { UserRepository } from './UserRepository';
import { autoInjectable } from 'tsyringe';
import { Controller, Get, JsonResponse, Post, Body, Param, Put, Delete } from 'decorators/controller';
import { RequireAuthentication, RequireAuthorization } from 'middleware/Authentication';
import { IController } from 'interfaces/IController';

@autoInjectable()
@Controller('/users')
@RequireAuthentication()
export class UserController implements IController {

  constructor(private userRepository: UserRepository) {}

  @Get('/')
  @RequireAuthorization('admin')
  @JsonResponse()
  public async findAll() {
    return await this.userRepository.findAll();
  }

  @Get('/:id')
  @JsonResponse()
  public async findById(@Param('id') id: number) {
    return await this.userRepository.findById(id);
  }

  @Post('/')
  @JsonResponse()
  public async create(@Body() user: any) {
    return await this.userRepository.create(user);
  }

  @Put('/:id')
  @JsonResponse()
  public async updateById(@Param('id') id: number, @Body() user: any) {
    return await this.userRepository.updateById(id, user);
  }

  @Delete('/:id')
  @JsonResponse()
  public async deleteById(@Param('id') id: number) {
    return await this.userRepository.deleteById(id);
  }
}