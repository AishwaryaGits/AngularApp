import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }


  private data$ = new BehaviorSubject<any>(null); 
  dataObs$ = this.data$.asObservable();
  setData(value : any) : void {
    console.log(value);
    this.data$.next(value);
  }

 


}
