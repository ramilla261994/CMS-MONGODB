import { Body, Controller, Delete, Param, Patch, Post, Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Course } from './schema/course.schema';
import { CourseService } from './course.service';
import { get } from 'http';
import { CourseDto } from './dto/course.dto';
import { randomUUID } from 'crypto';

@Controller('course')
export class CourseController {
    constructor(private _service:CourseService) {}

    @Get()
    getAllCourses() {
        this._service.getAllCourses();
    }

    @Post()
    addCourse(@Body() newcourse: CourseDto) {
        const course = new Course();
        course.id = uuidv4();
        course.name = newcourse.name;
        course.description = newcourse.description;
        course.price = newcourse.price;
        course.duration = newcourse.duration;
        this._service.addCourse(course);
    }

    @Get(':id')
    getCourseById(id: string) {
        this._service.getCourseById(id);
    }

    @Get('name/:name')
    findCourseByName(@Param('name') name: string) {
        this._service.findCourseByName(name);
    }
    
    @Patch(':id')
    updateCourse(id: string, @Body() course: Course) {
        this._service.updateCourse(id, course);
    }

    @Delete(':id')
    deleteCourse(id: string) {
        this._service.deleteCourse(id);
    }
}
function uuidv4(): string {
    throw new Error('Function not implemented.');
}

