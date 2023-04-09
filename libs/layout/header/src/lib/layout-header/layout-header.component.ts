import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ComponentLoader, DirectivesDynamicComponentDirective } from '@angular-lazy/shared';
import { BehaviorSubject } from 'rxjs';
import { LoadAuthFeatureModule } from '@angular-lazy/auth/feature';

@Component({
  selector: 'angular-lazy-layout-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, DirectivesDynamicComponentDirective],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css'],
})
export class LayoutHeaderComponent {
  public authComponent: BehaviorSubject<ComponentLoader | null> = new BehaviorSubject<ComponentLoader | null>(null);
  
  public onAuth(): void {
    this.authComponent.next(LoadAuthFeatureModule);
  }

  public onCancel(): void {
    this.authComponent.next(null);
  }

}
