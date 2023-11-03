import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // TODO: Switch temporary light mode to Service
  isLightMode = true;
  date = new Date();

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
  }
}
