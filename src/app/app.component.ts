import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './main-app/header/header.component';
import { FooterComponent } from "./main-app/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'second-app';
  private router = inject(Router);
  constructor(private router2: Router) {}
  afterclick() {
    this.router.navigate(['home']);
  }
}
