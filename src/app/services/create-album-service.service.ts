import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAlbumServiceService {

  constructor(private http: HttpClient) { }
  
  createAlbum(name:string,description:string) : Observable<any> {
    let data = {
      albumName : name,
      albumDesc : description
    }
    const endpoint = 'http://localhost:8000/imgService/createAlbum';
    return this.http.post(endpoint, data);
  }
  

}
