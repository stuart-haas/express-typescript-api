import { UserController } from '@components/User/UserController';
import { singleton } from 'tsyringe';

@singleton()
export class ControllerProvider {

  public controllers;

  constructor() {
    this.controllers = [
      UserController
    ]
  }
}