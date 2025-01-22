import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings';
import { Course } from '../../interface/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}
  ngOnInit() {}
  private courses$ = new BehaviorSubject<Course[]>([]);
  get courses() {
    return this.courses$.asObservable();
  }
  getCourses(): Course[] {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    if (data) {
      const courses = JSON.parse(data);
      this.updateCourses(courses);
      return courses;
    } else {
      return [];
    }
  }
  addCourse(data: Course) {
    const courses = this.courses$.value;
    const newCourses = [...courses, { ...data, id: courses.length + 1 }];
    this.updateCourses(newCourses);
    this.setItem(newCourses);
    return newCourses;
  }
  updateCourses(data: Course[]) {
    this.courses$.next(data);
  }
  setItem(dataArray: Course[]) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(dataArray));
  }
  deleteCourse(data: Course) {
    // this.courseService.deleteCourse(course);
    console.log('delte course clikec from cours service ');
    let course = this.courses$.value;
    course = course.filter((val) => val.id !== data.id);
    this.updateCourses(course);
    this.setItem(course);
  }
}
