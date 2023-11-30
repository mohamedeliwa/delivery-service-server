import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Parcel from '../schemas/parcel.schema';
import CreateParcelDto from '../dtos/create.parcel.dto';
import FindParcelDto from '../dtos/find.parcel.dto';
import UpdateParcelDto from '../dtos/update.parcel.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import User from 'src/users/schemas/user.schema';

@Injectable()
export class ParcelsService {
  constructor(private eventEmitter: EventEmitter2) {}

  private readonly parcels: Parcel[] = [];
  private lastID: number = 1;

  /**
   * creates a new parcel
   * @returns the newly created parcel otherwise throws an error
   */
  create(createParcelDto: CreateParcelDto): Parcel {
    try {
      const parcel: Parcel = { id: this.lastID, ...createParcelDto };
      this.parcels.push(parcel);
      this.lastID += 1;
      this.eventEmitter.emit('parcel.created', parcel);
      return parcel;
    } catch (error) {
      throw new HttpException(
        'Failed to create the parcel!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * finds parcels with specific matches
   * @returns a list of the matching parcels otherwise throws an error
   */
  find(findParcelDto: FindParcelDto): Parcel[] {
    try {
      let parcels = this.parcels.map((parcel) => parcel);

      if (findParcelDto.sender) {
        parcels = parcels.filter((parcel) => {
          return parcel.sender === findParcelDto.sender;
        });
      }

      if (findParcelDto.biker) {
        parcels = parcels.filter((parcel) => {
          return parcel?.biker === findParcelDto.biker;
        });
      }
      return parcels;
    } catch (error) {
      throw new HttpException(
        'Failed to find the parcels!',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /**
   * finds a parcel by id
   * @returns the found parcel
   */
  findOne(id: number): Parcel {
    const parcel = this.parcels.find((parcel) => parcel.id === id);
    if (parcel) {
      return parcel;
    } else {
      throw new HttpException('Parcel not found', HttpStatus.NOT_FOUND);
    }
  }

  /**
   * updates a parcel using its id
   * @returns the updated parcel object or throws an error
   */
  update(parcelID: number, updateParcelDto: UpdateParcelDto): Parcel {
    const parcelIndex = this.parcels.findIndex(
      (parcel) => parcel.id === parcelID,
    );
    if (parcelIndex === -1) {
      throw new HttpException('No Such parcel found!', HttpStatus.BAD_REQUEST);
    }
    this.parcels[parcelIndex] = {
      ...this.parcels[parcelIndex],
      ...updateParcelDto,
    };
    this.eventEmitter.emit('parcel.updated', this.parcels[parcelIndex]);
    return this.parcels[parcelIndex];
  }

  /**
   * marks a parcel as picked
   * @returns the updated parcel
   */
  pick(parcelID: number, user: User): Parcel {
    const parcel = this.findOne(parcelID);
    if (parcel?.biker) {
      throw new HttpException(
        'Parcel can not be picked twice!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.update(parcelID, { biker: user.id, pickedAt: new Date() });
  }

  /**
   * marks a parcel as dropped
   * @returns the updated parcel
   */
  drop(parcelID: number, user: User): Parcel {
    const parcel = this.findOne(parcelID);
    if (!parcel?.biker) {
      throw new HttpException(
        'Parcel can not be dropped before being picked!',
        HttpStatus.BAD_REQUEST,
      );
    }
    // a biker can't drop other's bikers parcel
    if (parcel?.biker !== user.id) {
      throw new HttpException('You are not allowed!', HttpStatus.FORBIDDEN);
    }

    if (parcel?.droppedAt) {
      throw new HttpException(
        'Parcel can not be dropped twice!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.update(parcelID, { droppedAt: new Date() });
  }
}
