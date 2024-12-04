import { IsString, Max, Min } from "class-validator";

export class CourseDto {
    @IsString()
    id: string;
    @IsString()
    name: string;
    @IsString()
    @Min(4)
    @Max(255)
    description: string;
    @IsString()
    price: number;
    @IsString()
    duration: number;
    @IsString()
    status: string;
};