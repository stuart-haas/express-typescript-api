import { autoInjectable, inject } from 'tsyringe';
import { Controller, Get, JsonResponse, Post, Body, Param, Put, Delete } from 'core/http';
import { RequireAuthentication, RequireAuthorization } from 'middleware/Authentication';
import { IController } from 'core/interfaces/IController';
import { Repository } from 'core/database/Repository';
import { UserRepository } from 'app/providers/DataProvider';
import { User } from 'app/models/User';

@autoInjectable()
@Controller('/users')
@RequireAuthentication()
export class UserController implements IController {

  constructor(@inject(UserRepository) private userRepository: Repository) {}

  @Get('/')
  @RequireAuthorization('admin')
  @JsonResponse()
  public async findAll() {
    const { rows } = await this.userRepository.findAll();
    return rows;
  }

  // @Get('/:id')
  // @JsonResponse()
  // public async findById(@Param('id') id: number) {
  //   return await this.userRepository.findById(id);
  // }

  @Post('/')
  @JsonResponse()
  public async create(@Body() user: User) {
    const { rows } = await this.userRepository.create(user);
    return rows;
  }

  // @Put('/:id')
  // @JsonResponse()
  // public async updateById(@Param('id') id: number, @Body() user: any) {
  //   return await this.userRepository.updateById(id, user);
  // }

  // @Delete('/:id')
  // @JsonResponse()
  // public async deleteById(@Param('id') id: number) {
  //   return await this.userRepository.deleteById(id);
  // }
}