import { Inject, Injectable } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Course } from './schema/course.schema';
import mongoose from 'mongoose';

@Injectable()
export class CourseService {

    constructor( 
        @InjectModel(Course.name)
        private CourseModel: mongoose.Model<Course>
    ) {}
    
    async getAllCourses(): Promise<Course[]> {
        const res = await this.CourseModel.find();
        return res;
    }

    async addCourse(course: Course): Promise<Course> {
        const res = await this.CourseModel.create(course);
        return res;
    }

    async getCourseById(id: string): Promise<Course> {
        const res = await this.CourseModel.findById(id);
        return res;
    }

    async updateCourse(id: string, course: Course): Promise<Course> {
        const res = await this.CourseModel.findByIdAndUpdate(id, course, {new: true});
        return res;
    }

    async deleteCourse(id: string): Promise<Course> {     
        const res = await this.CourseModel.findByIdAndDelete(id);
        return res;
    }

    async deleteAllCourses(): Promise<mongoose.DeleteResult> {
        const res = await this.CourseModel.deleteMany();
        return res;
    }

    async findCourseByName(name: string): Promise<Course> {    
        const res = await this.CourseModel.findOne({name});
        return res;
    }
}
