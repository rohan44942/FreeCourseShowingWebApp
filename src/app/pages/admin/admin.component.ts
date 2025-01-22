import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Strings } from '../../enum/strings';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [NgIf, RouterLink, FormsModule, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  model: any = {};
  //  = {
  //   title: 'admin ka form h bhai',
  //   description: 'teri marji h dost ',
  // };
  cover?: string | any;
  cover_file: any;
  showError?: boolean;
  courses: any[] = [];
  constructor() {
    // this.getCourses();
  }
  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    if (data) {
      console.log('json.parese value ', typeof JSON.parse(data));
      // this.courses = [...this.courses, JSON.parse(data)];
      this.courses = JSON.parse(data);
      console.log('after adding ', this.courses, typeof this.courses);
    }
  }

  handleSubmit(form: NgForm) {
    // handle the form here
    console.log('form is clicked');
    if (form.invalid || !this.cover) {
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
      return;
    }
    this.saveCourse(form);
    // console.log(form.value);
  }

  saveCourse(form: NgForm) {
    const formValue = form.value;
    const data = {
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1,
    };
    // store data as array , make array of data and then store it
    const dataArray = [...this.courses, data];
    this.setItem(dataArray);
    this.courses = dataArray;
    this.clearForm(form);
  }
  clearForm(form: NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }
  onfileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // create a reader obj
      this.cover_file = file;
      const reader = new FileReader();
      reader.onload = () => {
        const dataurl = reader.result?.toString();
        this.cover = dataurl;
        console.log('image', this.cover);
      };
      reader.readAsDataURL(file);
      this.showError = false;
    }
  }

  deleteCourse(cousrse: any) {
    // here delte the course
    this.courses = this.courses.filter((val) => val.id != cousrse.id);
    this.setItem(this.courses);
  }
  setItem(dataArray: any) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(dataArray));
  }
}
