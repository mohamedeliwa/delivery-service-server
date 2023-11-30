import User, { Role } from './user.schema';

const UserDB: User[] = [
  // Hard coded Senders
  { id: 1, name: 'sender_1', password: 'password', role: Role.SENDER },
  { id: 2, name: 'sender_2', password: 'password', role: Role.SENDER },
  { id: 3, name: 'sender_3', password: 'password', role: Role.SENDER },
  { id: 4, name: 'sender_4', password: 'password', role: Role.SENDER },
  { id: 5, name: 'sender_5', password: 'password', role: Role.SENDER },
  // Hard coded Bikers
  { id: 6, name: 'biker_1', password: 'password', role: Role.BIKER },
  { id: 7, name: 'biker_2', password: 'password', role: Role.BIKER },
  { id: 8, name: 'biker_3', password: 'password', role: Role.BIKER },
  { id: 9, name: 'biker_4', password: 'password', role: Role.BIKER },
  { id: 10, name: 'biker_5', password: 'password', role: Role.BIKER },
  { id: 11, name: 'biker_6', password: 'password', role: Role.BIKER },
  { id: 12, name: 'biker_7', password: 'password', role: Role.BIKER },
  { id: 13, name: 'biker_8', password: 'password', role: Role.BIKER },
  { id: 14, name: 'biker_9', password: 'password', role: Role.BIKER },
  { id: 15, name: 'biker_10', password: 'password', role: Role.BIKER },
];

export default UserDB;
