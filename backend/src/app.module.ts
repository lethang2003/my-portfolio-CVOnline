// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'; // <-- thêm dòng này
import { CVModule } from './cv/cv.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Giúp toàn bộ app dùng được process.env
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/cvdb'),
    CVModule,
    ContactModule,
  ],
})
export class AppModule {}
