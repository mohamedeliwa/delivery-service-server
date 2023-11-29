import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export interface Sender {
  id: number;
  name: string;
  role: 'sender';
}

@Injectable()
export class SendersService {
  /**
   * hardcoded senders database
   */
  private readonly senders: Sender[] = [
    { id: 1, name: 'Jhon Deo', role: 'sender' },
    { id: 2, name: 'Jhon Deo', role: 'sender' },
    { id: 3, name: 'Jhon Deo', role: 'sender' },
    { id: 4, name: 'Jhon Deo', role: 'sender' },
    { id: 5, name: 'Jhon Deo', role: 'sender' },
  ];

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
