import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ComponentLoader, DirectivesDynamicComponentDirective } from '@angular-lazy/shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadAuthFeatureModule } from '@angular-lazy/auth/feature';
import { AddressService, LoadAddressComponent } from '@angular-lazy/address/feature';

@Component({
  selector: 'angular-lazy-layout-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, DirectivesDynamicComponentDirective],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css'],
})
export class LayoutHeaderComponent {
  public authComponent$: BehaviorSubject<ComponentLoader | null> = new BehaviorSubject<ComponentLoader | null>(null);
  public addressComponent$: BehaviorSubject<ComponentLoader | null> = new BehaviorSubject<ComponentLoader | null>(null);

  public address$: Observable<string> = this.addressService.address;

  constructor(private addressService: AddressService) {
    this.addressService.address.subscribe((address: string) => {
      console.log('address: ', address);
    });
  }
  
  public onAuth(): void {
    this.authComponent$.next(LoadAuthFeatureModule);
  }

  public onAddAddress(): void {
    this.addressComponent$.next(LoadAddressComponent);
  }


  public onCancel(): void {
    this.authComponent$.next(null);
  }

}
