import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import SenderLoginDto from '../dtos/sender.login.dto';
import Sender from '../schemas/sender.schema';
import SenderDB from '../schemas/sender.db';

@Injectable()
export class SendersService {
  /**
   * hardcoded senders database
   */
  private readonly senders: Sender[] = SenderDB;

  /**
   * authenticates a sender by credentials
   * @param name of the sender
   * @param password of the sender
   * @returns authenticated sender otherwise throws an error
   */
  login({ name, password }: SenderLoginDto): Sender | undefined {
    const sender = this.senders.find(
      (sender) => sender.name === name && sender.password === password,
    );
    if (sender) {
      return sender;
    } else {
      throw new HttpException('Wrong credentials!', HttpStatus.UNAUTHORIZED);
    }
  }

  /**
   * finds a sender by id
   * @param id number
   * @returns sender
   */
  getSender(id: number): Sender | undefined {
    const sender = this.senders.find((sender) => sender.id == id);
    if (sender) {
      return sender;
    } else {
      throw new HttpException('Sender not found', HttpStatus.NOT_FOUND);
    }
  }
}
