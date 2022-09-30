import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, first } from 'rxjs/operators'
import { of, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userDetails: any | null;
  sessionKey!: "EA#$&BJHH@#(*";

  constructor(
    private router: Router,
    private httpClient : HttpClient
    
  ) {
    const savedUserDetails = sessionStorage.getItem(this.sessionKey);
    if(savedUserDetails) {
      this._userDetails = JSON.parse(savedUserDetails);
    }
  }

 /*  login(loginDetails:any) :Observable<any>{
 

    return from(this.firestore
      .collection<any>(
          'users', 
          ref => ref
            .where('email', '==', loginDetails.username)
            .where('password', '==', loginDetails.password)
      )
      .valueChanges()
      .pipe(
        map(
          userData => {
            if(userData === undefined) {
              return null;
            }
            let userDataToBeStored = {
              ...userData[0],
              password: ''
            }
            this.setUserDetails(userDataToBeStored)
            return userDataToBeStored;
          }
        )
      )

   
      )
  
  } */

 /* register(registerDetails:any): Observable<any> {
    
  const endpoint = environment.swaggerUrlPrefix + "saveComponentDataDef/";
  const data_def ={
    "data_def" : dataDef,
    "validations" : validations
  }
  console.log("postDataDef",data_def)
  return this.httpClient.post(endpoint,data_def);

     
  }  */

  logout() {
    const user = null;
    //this.setUserDetails(user);
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

/*   private setUserDetails(details) {
    this._userDetails = details;
    sessionStorage.setItem(this.sessionKey, JSON.stringify(details))
  }

 
  updateUserUploads(userFile){
    const userDetails = this.getUserDetails();
    this.setUserDetails({
      ...userDetails,
      userUploadedImage:userFile
    })
  } */
}
