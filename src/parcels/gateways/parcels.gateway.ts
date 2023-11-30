import {
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  // WebSocketServer,
} from '@nestjs/websockets';
// import { Server } from 'socket.io';

@WebSocketGateway()
export class ParcelsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // @WebSocketServer()
  // private readonly server: Server;

  afterInit(server: any) {
    // console.log({ server });
  }

  handleConnection(client: any) {
    console.log('connected: ', { id: client.id });
  }

  handleDisconnect(client: any) {
    console.log('disconnected: ', { id: client.id });
  }

  @SubscribeMessage('parcel')
  handleMessage(client: any, payload: any): string {
    console.log('received a messge', { payload });
    setInterval(() => {
      console.log('sending a parcel', { payload });
      client.emit('message', payload);
    }, 2000);
    return payload;
  }
}
