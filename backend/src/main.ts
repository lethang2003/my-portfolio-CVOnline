import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // ✅ cần thêm dòng này
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: ['http://localhost:3002', 'https://my-portfolio-zgvh.onrender.com'],
      credentials: true,
    },
  });

  // ✅ Cho phép truy cập file ảnh trong thư mục uploads
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  await app.listen(process.env.PORT || 3003);
  console.log(`Server is running on port ${process.env.PORT || 3003}`);
}
bootstrap();
