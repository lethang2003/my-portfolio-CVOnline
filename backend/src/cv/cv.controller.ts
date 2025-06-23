import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { CVService } from './cv.service';
import { CV } from './schemas/cv.schema';

@Controller('cv')
export class CVController {
  constructor(private readonly cvService: CVService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  create(@UploadedFile() file: Express.Multer.File, @Body() data: Partial<CV>) {
   const avatar = file?.filename ?? undefined;

    return this.cvService.create({ ...data, avatar });
  }

  @Get()
  findAll() {
    return this.cvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<CV>) {
    return this.cvService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvService.remove(id);
  }
}
