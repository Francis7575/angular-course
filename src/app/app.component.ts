import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private location: Location) {}

  isActiveRoute(route: string): boolean {
    return this.location.path() === route;
  }
}
