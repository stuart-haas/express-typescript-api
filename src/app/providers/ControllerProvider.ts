import { UserController } from '@components/User/UserController';

export class ControllerProvider {

  public controllers;

  constructor() {
    this.controllers = [
      UserController
    ]
  }
}