import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Mongoose } from 'mongoose';
import { Course, CourseSchema } from './schema/course.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Courses', schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
