import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  const port:number = parseInt(process.env.PORT) || 5000;
  await app.listen(port);
}
bootstrap();
