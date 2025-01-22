import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private route = inject(ActivatedRoute);
  id_vale?: number;
  // ngOnInit() {
  //   this.id_vale = Number(this.route.snapshot.paramMap.get('id'));
  //   this.route.params.subscribe({
  //     next: (data) => {
  //       this.id_vale = Number(data['id']);
  //       console.log(data, data['id'], this.id_vale);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     },
  //   });
  // }
}
