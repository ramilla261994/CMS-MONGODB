import { Body, Controller, Delete, Param, Patch, Post, Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Course, CourseStatusEnum } from './schema/course.schema';
import { CourseService } from './course.service';
import { get } from 'http';
import { CourseDto } from './dto/course.dto';
import { randomUUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

@Controller('course')
export class CourseController {
    constructor(private _service:CourseService) {}

    @Get()
    getAllCourses() {
        const result = this._service.getAllCourses();
        return result;
    }

    @Post()
    async addCourse(@Body() newcourse: CourseDto) {
        const course:Course={
        id : uuidv4(),
        name : newcourse.name,
        description : newcourse.description,
        price : newcourse.price,
        duration : newcourse.duration,
        status : CourseStatusEnum.ACTIVE
        }
        const result = await this._service.addCourse(course);
        return result;
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
       const result =  this._service.getCourseById(id);
       return result;
    }

    @Get('name/:name')
    findCourseByName(@Param('name') name: string) {
        const result = this._service.findCourseByName(name);
        return result;
    }
    
    @Patch(':id')
    updateCourse(@Param('id') id: string, @Body() course: Course) {
        const result = this._service.updateCourse(id, course);
        return result;
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        const result =  this._service.deleteCourse(id);
        return result;
    }

    @Delete()
    deleteAllCourses() {
        const result = this._service.deleteAllCourses();
        return result;
    }
}

// function uuidv4 removed to avoid conflict with imported uuidv4

