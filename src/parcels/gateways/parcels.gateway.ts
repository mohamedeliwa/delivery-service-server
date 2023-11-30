import { OnEvent } from '@nestjs/event-emitter';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import Parcel from '../schemas/parcel.schema';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000'],
  },
})
export class ParcelsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private readonly server: Server;

  handleConnection(client: any) {
    console.log('connected: ', { id: client.id });
  }

  handleDisconnect(client: any) {
    console.log('disconnected: ', { id: client.id });
  }

  @OnEvent('parcel.created')
  handleParcelCreatedEvent(parcel: Parcel) {
    this.server.emit('parcel.created', parcel);
  }

  @OnEvent('parcel.updated')
  handleParcelUpdatedEvent(parcel: Parcel) {
    this.server.emit('parcel.updated', parcel);
  }
}
