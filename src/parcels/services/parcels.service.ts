import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Parcel from '../schemas/parcel.schema';
import CreateParcelDto from '../dtos/create.parcel.dto';
import FindParcelDto from '../dtos/find.parcel.dto';
import UpdateParcelDto from '../dtos/update.parcel.dto';

@Injectable()
export class ParcelsService {
  private readonly parcels: Parcel[] = [];
  private lastID: number = 1;

  /**
   * creates a new parcel
   * @returns the newly created parcel otherwise throws an error
   */
  create(createParcelDto: CreateParcelDto): Parcel {
    try {
      const parcel: Parcel = { id: this.lastID + 1, ...createParcelDto };
      this.parcels.push(parcel);
      this.lastID += 1;
      return parcel;
    } catch (error) {
      throw new HttpException(
        'Failed to create the parcel!',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /**
   * finds parcels with specific matches
   * @returns a list of the matching parcels otherwise throws an error
   */
  find(findParcelDto: FindParcelDto): Parcel[] {
    try {
      if (!findParcelDto.sender && !findParcelDto.biker) return this.parcels;

      let parcels = this.parcels.map((parcel) => parcel);

      if (findParcelDto.sender) {
        parcels = parcels.filter((parcel) => {
          parcel.sender == findParcelDto?.sender;
        });
      }

      if (findParcelDto.biker) {
        parcels = parcels.filter((parcel) => {
          parcel?.biker == findParcelDto.biker;
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
    const parcel = this.parcels.find((parcel) => parcel.id == id);
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
    try {
      const parcelIndex = this.parcels.findIndex(
        (parcel) => parcel.id === parcelID,
      );
      if (parcelIndex === -1) {
        throw new HttpException(
          'No Such parcel found!',
          HttpStatus.BAD_REQUEST,
        );
      }
      this.parcels[parcelIndex] = {
        ...this.parcels[parcelIndex],
        ...updateParcelDto,
      };
      return this.parcels[parcelIndex];
    } catch (error) {
      throw new HttpException(
        'Failed to update the parcel!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
