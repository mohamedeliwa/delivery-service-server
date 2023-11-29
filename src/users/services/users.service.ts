import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserDB from '../schemas/user.db';
import User from '../schemas/user.schema';
import UserCredentialsDto from '../dtos/user.credentials.dto';

@Injectable()
export class UsersService {
  /**
   * hardcoded users database
   */
  private readonly users: User[] = UserDB;

  /**
   * authenticates a user by credentials
   * @param name of the user
   * @param password of the user
   * @returns authenticated user otherwise throws an error
   */
  login({ name, password }: UserCredentialsDto): User {
    const user = this.users.find(
      (user) => user.name === name && user.password === password,
    );
    if (user) {
      return user;
    } else {
      throw new HttpException('Wrong credentials!', HttpStatus.UNAUTHORIZED);
    }
  }

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
}
