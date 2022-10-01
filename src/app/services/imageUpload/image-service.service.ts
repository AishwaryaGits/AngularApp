import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    const uploadImagePath ="uploadImg"
    const endpoint = environment.userAuthPrefixUri + uploadImagePath;
    const formData = new FormData();
    let data :{
      "albumName":"Yashi"
    }
    formData.append('albumName',"Yashi")
    formData.append('image', image);
    console.log("form",formData,image,typeof(image))
    return this.http.post(endpoint, formData);
  }
}


