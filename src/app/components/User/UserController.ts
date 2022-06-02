import { inject, injectable } from 'tsyringe';
import { Controller, Get, JsonResponse, Post, Body, Param, Put, Delete, Query } from 'core/http';
import { IController } from 'core/interfaces';
import { Repository } from 'core/database/Repository';
import { RequireAuthentication, RequireAuthorization } from 'app/middleware';
import { User } from 'app/models/User';

@injectable()
@Controller('/users')
@RequireAuthentication()
export class UserController implements IController {

  constructor(@inject('UserRepository') private userRepository: Repository) {}

  @Get()
  @JsonResponse()
  public async findAll() {
    const { rows } = await this.userRepository.findAll();
    return rows;
  }

  @Get('search')
  @JsonResponse()
  public async search(@Query() search: any) {
    const { rows } = await this.userRepository.search(search);
    return rows;
  }

  @Get(':id')
  @JsonResponse()
  public async findById(@Param('id') id: number) {
    const { rows } = await this.userRepository.findById(id);
    return rows[0];
  }

  @Post()
  @RequireAuthorization('admin')
  @JsonResponse()
  public async create(@Body() user: User) {
    const { rows } = await this.userRepository.create(user);
    return rows[0];
  }

  @Put(':id')
  @RequireAuthorization('admin')
  @JsonResponse()
  public async updateById(@Param('id') id: number, @Body() user: User) {
    const { rows } = await this.userRepository.updateById(id, user);
    return rows[0];
  }

  @Delete(':id')
  @RequireAuthorization('admin')
  @JsonResponse()
  public async deleteById(@Param('id') id: number) {
    const { rows } = await this.userRepository.deleteById(id);
    return rows[0];
  }
}