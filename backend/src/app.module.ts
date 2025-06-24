import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CVModule } from './cv/cv.module';
import { ContactModule } from './contact/contact.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Load .env và cho phép dùng biến môi trường ở mọi nơi
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Kết nối MongoDB qua biến môi trường
    MongooseModule.forRoot(process.env.MONGODB_URI as string),

    // Các module của bạn
    CVModule,
    ContactModule,
  ],
  controllers: [AppController], // ✅ thêm
  providers: [AppService],
})
export class AppModule {}
