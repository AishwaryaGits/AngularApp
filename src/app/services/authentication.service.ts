import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, first } from 'rxjs/operators'
import { of, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessagingService } from './messaging.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userDetails: any | null;
  sessionKey!: "EA#$&BJHH@#(*";

  constructor(
    private router: Router,
    private httpClient : HttpClient,
    private messagingService: MessagingService,
    
  ) {
    const savedUserDetails = sessionStorage.getItem(this.sessionKey);
    if(savedUserDetails) {
      this._userDetails = JSON.parse(savedUserDetails);
    }
  }

 login(loginDetails:any) :Observable<any>{
  const loginPath ="login"
  const endpoint = environment.userAuthPrefixUri + loginPath;
  
  console.log("postDataDef",loginDetails)
  return this.httpClient.post(endpoint,loginDetails);
  
  } 

  register(registerDetails:any): Observable<any> {
  const registrationPath ="register"
  const endpoint = environment.userAuthPrefixUri + registrationPath;
  
  console.log("postDataDef",registerDetails)
  return this.httpClient.post(endpoint,registerDetails);

     
  }  

  logout() {
    const user = null;
    this.messagingService.sendUserDetails({});
    this.setUserDetails(user);
    sessionStorage.removeItem(this.sessionKey);
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this._userDetails;
  }
  
  // Method to fetch user data for subscription purpose
  getUserDetails() {
    if(!this._userDetails) {
      this._userDetails = sessionStorage.getItem(this.sessionKey);
    }
    return  this._userDetails ; 
  }

  setUserDetails(details: any) {
    this._userDetails = details;
    sessionStorage.setItem(this.sessionKey, JSON.stringify(details))
  }

  sendToMessaging(details: any) {
    this.messagingService.sendUserDetails(details);
  }
 /* 
  updateUserUploads(userFile){
    const userDetails = this.getUserDetails();
    this.setUserDetails({
      ...userDetails,
      userUploadedImage:userFile
    })
  } */
}
