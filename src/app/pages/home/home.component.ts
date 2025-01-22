import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Strings } from '../../enum/strings';
import { FooterComponent } from '../../main-app/footer/footer.component';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  imports: [CoursesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private router = inject(Router);
  id: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  title: any = 'hi this is home page ';
  courses: any[] = [];
  GoToAbout(id: any) {
    this.router.navigate(['/', 'about', id]);
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
}
