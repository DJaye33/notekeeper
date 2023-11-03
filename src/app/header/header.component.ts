import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // TODO: Switch temporary light mode to Service
  isLightMode = this.themeService.isLightMode;
  date = new Date();

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
  }
}
