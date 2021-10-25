import { UserController } from '@components/User/UserController';
import { IndexController } from '@components/Index/IndexController';
import { singleton } from 'tsyringe';

@singleton()
export class ControllerProvider {

  public controllers;

  constructor() {
    this.controllers = [
      IndexController,
      UserController
    ]
  }
}