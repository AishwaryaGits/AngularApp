import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails: any;

  constructor(
    private authenticationService: AuthenticationService,
    private messagingService: MessagingService
   
  ) { }

  ngOnInit(): void {

    this.userDetails = this.authenticationService.isAuthenticated();
    
    this.messagingService.userDetails$.subscribe(
      userData => {
        let dataObj;
        dataObj = typeof userData == 'string' ? JSON.parse(userData) : userData;
        this.userDetails = dataObj;
      }
    ) 
  }

  isUserAuthenticated() {
    return !!this.userDetails;
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}
