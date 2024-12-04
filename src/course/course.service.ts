import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Course } from './schema/course.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>,
  ) {}

  async getAllCourses(): Promise<Course[]> {
    const res = await this.courseModel.find();
    return res;
  }

  async addCourse(course: Course): Promise<Course> {
    const res = await this.courseModel.create(course);
    return res;
  }

  async getCourseById(id: string): Promise<Course> {
    const res = await this.courseModel.findOne({id : id});
    return res;
  }

  async updateCourse(id: string, course: Course): Promise<Course> {
    const res = await this.courseModel.findOneAndUpdate({ id: id }, course, { new: true });
    return res;
  }

  async deleteCourse(id: string): Promise<Course> {
    const res = await this.courseModel.findOneAndDelete({id: id});
    if (!res) {
      throw new Error(`Course with id ${id} not found`);
    }
    return res;
  }

  async deleteAllCourses(): Promise<mongoose.DeleteResult> {
    const res = await this.courseModel.deleteMany();
    return res;
  }

  async findCourseByName(name: string): Promise<Course[]> {
    const res = await this.courseModel.find({ name });
    return res;
  }
}