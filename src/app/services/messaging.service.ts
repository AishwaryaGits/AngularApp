import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  // Observable string source
  private userDetailsSource = new Subject<object>();

  // Observable string streams
  userDetails$ = this.userDetailsSource.asObservable();

  sendUserDetails(data: object) {
    this.userDetailsSource.next(data);
  }

}
