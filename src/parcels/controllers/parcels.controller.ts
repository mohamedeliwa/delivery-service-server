import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ParcelsService } from '../services/parcels.service';
import CreateParcelDto from '../dtos/create.parcel.dto';
import Parcel from '../schemas/parcel.schema';
import FindParcelDto from '../dtos/find.parcel.dto';
import ParcelParamsDto from '../dtos/parcel.params.dto';
import UpdateParcelDto from '../dtos/update.parcel.dto';
import { Role } from 'src/users/schemas/user.schema';
import { Roles } from 'src/authentication/decorators/roles.decorator';

@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    whitelist: true,
    forbidUnknownValues: true,
  }),
)
@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Roles(Role.SENDER)
  @Post()
  create(@Body() createParcelDto: CreateParcelDto): Parcel {
    return this.parcelsService.create(createParcelDto);
  }

  @Roles(Role.BIKER)
  @Get()
  find(@Query() findParcelDto: FindParcelDto): Parcel[] {
    return this.parcelsService.find(findParcelDto);
  }

  @Roles(Role.SENDER)
  @Get(':id')
  findOne(@Param() { id }: ParcelParamsDto): Parcel {
    return this.parcelsService.findOne(id);
  }

  @Roles(Role.BIKER)
  @Patch(':id')
  update(
    @Param() { id }: ParcelParamsDto,
    @Body() updateParcelDto: UpdateParcelDto,
  ): Parcel {
    return this.parcelsService.update(id, updateParcelDto);
  }
}
