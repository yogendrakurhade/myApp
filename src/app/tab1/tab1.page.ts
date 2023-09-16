import { Component } from '@angular/core';
import { PhoneCallService } from '../services/phone-call.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private phoneCallService: PhoneCallService) { }
  makeCall() {
    this.phoneCallService.makePhoneCall('8830182910')
  }
}
