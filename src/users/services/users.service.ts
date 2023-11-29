import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserDB from '../schemas/user.db';
import User from '../schemas/user.schema';

@Injectable()
export class UsersService {
  /**
   * hardcoded users database
   */
  private readonly users: User[] = UserDB;

  /**
   * finds a user by id
   * @param id number
   * @returns user
   */
  findOne(id: number): User {
    const user = this.users.find((user) => user.id == id);
    if (user) {
      return user;
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  /**
   * finds a user by name
   * @param name of the user
   * @returns user
   */
  findOneByName(name: string): User | undefined {
    return this.users.find((user) => user.name == name);
  }
}
