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

  private imageData$ = new BehaviorSubject<any>(null); 
  imageDataObs$ = this.imageData$.asObservable();
  setImageData(value : any) : void {
    this.imageData$.next(value);
  }
 


}
