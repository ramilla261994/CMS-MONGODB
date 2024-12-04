import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    //Config the .env file
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    //Config the db file
    MongooseModule.forRoot(process.env.MONGODB_URI),
    CourseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
