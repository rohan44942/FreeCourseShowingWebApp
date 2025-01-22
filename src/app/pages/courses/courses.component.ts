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
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  // isAdmin = input<boolean>(false);
  courseService: Array<any> = [];
  @Input() courses: any;
  @Input() isAdmin = false;
  @Output() del: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  understandSignalUsageWithExample() {
    // without signals
  }

  deleteCourse(course: any) {
    this.del.emit(course);
    // this.courseService.deleteCourse(course);
  }

  ngOnDestroy() {}
}
