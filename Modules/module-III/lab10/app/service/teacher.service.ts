import {Injectable} from "@angular/core";
import { TEACHERS } from "../mock/teacher-mock";

@Injectable()
export class TeacherService{
    getTeachers(){
        return Promise.resolve(TEACHERS);
    }
}