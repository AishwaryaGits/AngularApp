import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {


  fetchAllImages(albumId : string) : Observable<any>{
    const FETCH_ALBUM_IMGS ="getAlbumImgs/"
    const endpoint = environment.imageServicePrefixUri+ FETCH_ALBUM_IMGS+albumId;
    return this.http.get(endpoint);
  }

  deleteImage(imageId : any) :Observable<any> {
    console.log(imageId)
    const DELETE_IMG ="deleteImg/"
    const endpoint = environment.imageServicePrefixUri+ DELETE_IMG+imageId;
    return this.http.delete(endpoint);
  }

  constructor(private http: HttpClient) {}


  public uploadImage(image: File,albumName:string,albumId:string): Observable<any> {
    console.log(albumName+ "  "+ albumId)
    const uploadImagePath ="addImg"
    const endpoint = environment.imageServicePrefixUri + uploadImagePath;
    const formData = new FormData();
    
    formData.append('albumName',albumName)
    formData.append('albumId',albumId)
    formData.append('image', image);
    console.log("form",formData,image,typeof(image))
    return this.http.post(endpoint, formData);
  }
}


