import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    
    const createAlbum ="createAlbum"
    const endpoint = environment.imageServicePrefixUri + createAlbum;
  
    return this.http.post(endpoint, data);
  }
  
  deleteAlbum(albumId: string) : Observable<any> {
    const DELETE_ALBUM ="deleteAlbum/"
    const endpoint = environment.imageServicePrefixUri+ DELETE_ALBUM+albumId;
  
    return this.http.delete(endpoint);
  }


}
