import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //transformar o json em objeto
      whitelist: true, // ignorar as propriedades q nao estiverem no dto
      forbidNonWhitelisted: true, // lanca um erro se um dado nao estiver no dto
      
    })
  )
  await app.listen(3000);
}
bootstrap();
