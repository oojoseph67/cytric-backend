import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
   * Use validation pipes globally
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  /**
   * swagger configuration
   */

  const swaggerConfig = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('Cytric NFT Backend')
    .setDescription(
      'Use the base API endpoints to store and retrieve nft data  at http://localhost:3000',
    )
    .setTermsOfService('https://example.com/terms')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000', 'Development Server')
    .addBearerAuth({
      type: 'http',
      name: 'Authorization',
      scheme: '',
      bearerFormat: 'JWT',
    })
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // Configure CORS with specific options
  app.enableCors({
    origin: ['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
