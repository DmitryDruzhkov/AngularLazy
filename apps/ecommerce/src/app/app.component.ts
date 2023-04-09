import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutHeaderComponent } from '@angular-lazy/layout/header';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutHeaderComponent],
  selector: 'angular-lazy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
