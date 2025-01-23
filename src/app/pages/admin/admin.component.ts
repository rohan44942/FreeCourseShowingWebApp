import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interface/course.interface';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [NgIf, RouterLink, FormsModule, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  // model: any = {};
  // cover?: string | any;
  // cover_file: any;
  // showError?: boolean;

  model = signal<any>({});
  cover = signal<string | any>(null);
  cover_file = signal<any>(null);
  showError = signal<any>(false);

  private courseService = inject(CourseService);
  constructor() {}
  ngOnInit() {}
  handleSubmit(form: NgForm) {
    // handle the form here
    console.log('form is clicked');
    if (form.invalid || !this.cover) {
      form.control.markAllAsTouched();
      if (!this.cover) {
        // this.showError = true;
        this.showError.set(true);
      }
      return;
    }
    this.saveCourse(form);
  }

  async saveCourse(form: NgForm) {
    try {
      const formValue = form.value;
      const data: Course = {
        ...formValue,
        image: this.cover(),
      };
      await this.courseService.addCourse(data);
      this.clearForm(form);
    } catch (e) {
      console.log(e);
    }
  }
  clearForm(form: NgForm) {
    form.reset();
    // this.cover = null;
    // this.cover_file = null;
    this.cover.set(null);
    this.cover_file.set(null);
  }
  onfileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // create a reader obj
      this.cover_file = file;
      const reader = new FileReader();
      reader.onload = () => {
        const dataurl = reader.result?.toString();
        // this.cover = dataurl;
        this.cover.set(dataurl);
        console.log('image', this.cover);
      };
      reader.readAsDataURL(file);
      // this.showError = false;
      this.showError.set(false);
    }
  }

  deleteCourse(cousrse: any) {}
}
