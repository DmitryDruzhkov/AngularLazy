import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  public address: BehaviorSubject<string> = new BehaviorSubject<string>('');

}
