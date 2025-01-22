import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  output,
  signal,
} from '@angular/core';
import { Strings } from '../../enum/strings';
import { Course } from '../../interface/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

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
  private courseService = inject(CourseService);
  courses: Course[] = [];
  coursesSub!: Subscription;
  constructor() {}

  ngOnInit() {
    // this.getCourses();
    this.courses = this.courseService.getCourses();
    this.coursesSub = this.courseService.courses.subscribe({
      next: (courses) => {
        this.courses = courses;
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
  ngOnDestroy() {
    if (this.coursesSub) {
      this.coursesSub.unsubscribe();
    }
  }
}
