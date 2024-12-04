import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";
import { v4 as uuidv4 } from 'uuid';

export enum CourseStatusEnum {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    DELETED = 'deleted',
}

@Schema({
    timestamps: true,
    collection: 'Courses'
})

export class Course{
    @Prop(
        {
            type: String,
            required: true,
            unique: true,
            default: uuidv4
        }
    )
    id: string;
    @Prop({
        type: String,
        required: true
    })
    name: string;
    @Prop({
        type: String,
        length: 255
    })
    description: string;
    @Prop({
        type: Number
    })
    price: number;
    @Prop({
        type: Number
    })
    duration: number;
    @Prop()
    status: CourseStatusEnum;
}

export const CourseSchema = SchemaFactory.createForClass(Course);