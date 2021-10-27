import { User } from 'entity/User';
import { getManager } from 'typeorm';

export class UserService {

  public async findAll() {
    return await getManager().find(User);
  }

  public async findById(id: number) {
    return await getManager().findOne(User, id);
  }

  public async create(payload: User) {
    const userRepository = getManager().getRepository(User);
    const user = userRepository.create(payload);
    return await userRepository.save(user);
  }
}