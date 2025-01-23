import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  SecurityContext,
  signal,
} from '@angular/core';
// import { Strings } from '../../enum/strings';
import { Course } from '../../interface/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  // isAdmin = input<boolean>(false);
  // @Input() courses: any;
  // @Output() del: EventEmitter<any> = new EventEmitter();
  @Input() isAdmin = false;
  // courseService: Array<any> = [];
  private courseService = inject(CourseService); // injecting course services in the this componet and using it with the help of subscriber
  // courses: Course[] = [];
  courses = signal<Course[]>([]); // for passing vairables
  coursesSub!: Subscription; // for taking value after subscribing some service
  // injecting sanitizer in the comp
  // private sanitizer = inject(DomSanitizer);
  constructor() {}

  ngOnInit() {
    // this.getCourses();
    // this.courses = this.courseService.getCourses();
    this.courses.set(this.courseService.getCourses());
    this.coursesSub = this.courseService.courses.subscribe({
      next: (courses) => {
        this.courses.set(courses);
      },
    });
  }

  understandSignalUsageWithExample() {
    // without signals
  }
  deleteCourse(course: Course) {
    console.log('inside the courses cliked');
    this.courseService.deleteCourse(course);
  }
  // sanitizerURL(value: string) {
  //   console.log(
  //     'this is coming from here',
  //     value,
  //     this.sanitizer.sanitize(SecurityContext.URL, value)
  //   );
  //   return this.sanitizer.sanitize(SecurityContext.URL, value);
  // }
  ngOnDestroy() {
    if (this.coursesSub) {
      this.coursesSub.unsubscribe();
    }
  }
}
