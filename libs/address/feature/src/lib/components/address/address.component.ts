import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'angular-lazy-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  constructor(private addressService: AddressService) {
    this.addressService.address.subscribe((address: string) => {
      console.log('address: ', address);
    });

    this.addressService.address.next('Москва');
  }
}
