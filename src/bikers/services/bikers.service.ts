import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Biker from '../schemas/biker.schema';
import BikerDB from '../schemas/biker.db';
import BikerCredentialsDto from '../dtos/biker.credentials.dto';

@Injectable()
export class BikersService {
  /**
   * hardcoded bikers database
   */
  private readonly bikers: Biker[] = BikerDB;

  /**
   * authenticates a biker by credentials
   * @param name of the biker
   * @param password of the biker
   * @returns authenticated biker otherwise throws an error
   */
  login({ name, password }: BikerCredentialsDto): Biker {
    const biker = this.bikers.find(
      (biker) => biker.name === name && biker.password === password,
    );
    if (biker) {
      return biker;
    } else {
      throw new HttpException('Wrong credentials!', HttpStatus.UNAUTHORIZED);
    }
  }

  /**
   * finds a biker by id
   * @param id number
   * @returns biker
   */
  getBiker(id: number): Biker {
    const biker = this.bikers.find((biker) => biker.id == id);
    if (biker) {
      return biker;
    } else {
      throw new HttpException('Biker not found', HttpStatus.NOT_FOUND);
    }
  }
}
