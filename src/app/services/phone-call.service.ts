import { Injectable } from '@angular/core';
import { PhoneCall } from 'capacitor-plugin-phone-call';

@Injectable({
  providedIn: 'root'
})
export class PhoneCallService {

  constructor() { }
  makePhoneCall(phoneNumber: string) {
    return PhoneCall.start({ phone: phoneNumber });
  }
}
