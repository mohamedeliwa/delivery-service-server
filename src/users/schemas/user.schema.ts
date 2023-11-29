export enum Role {
  SENDER = 'SENDER',
  BIKER = 'BIKER',
}

export default class User {
  id: number;
  name: string;
  password: string;
  role: Role;
}
