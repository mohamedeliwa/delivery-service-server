import User, { Role } from './user.schema';

const UserDB: User[] = [
  // Hard coded Senders
  { id: 1, name: 'Jhon Deo', password: '012345', role: Role.SENDER },
  { id: 2, name: 'Jhon Deo', password: '012345', role: Role.SENDER },
  { id: 3, name: 'Jhon Deo', password: '012345', role: Role.SENDER },
  { id: 4, name: 'Jhon Deo', password: '012345', role: Role.SENDER },
  { id: 5, name: 'Jhon Deo', password: '012345', role: Role.SENDER },
  // Hard coded Bikers
  { id: 6, name: 'Jhon Deo', password: '012345', role: Role.BIKER },
  { id: 7, name: 'Jhon Deo', password: '012345', role: Role.BIKER },
  { id: 8, name: 'Jhon Deo', password: '012345', role: Role.BIKER },
  { id: 9, name: 'Jhon Deo', password: '012345', role: Role.BIKER },
  { id: 10, name: 'Jhon Deo', password: '012345', role: Role.BIKER },
];

export default UserDB;
