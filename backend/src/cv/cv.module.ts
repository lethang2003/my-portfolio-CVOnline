import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CVController } from './cv.controller';
import { CVService } from './cv.service';
import { CV, CVSchema } from './schemas/cv.schema';

@Module({
  imports: [
    // ✅ Thêm MongooseModel cho schema CV tại đây
    MongooseModule.forFeature([
      { name: CV.name, schema: CVSchema },
    ]),
  ],
  controllers: [CVController],
  providers: [CVService],
})
export class CVModule {}
