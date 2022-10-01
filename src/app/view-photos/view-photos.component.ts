import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../services/data-provider.service';
import { ImageServiceService } from '../services/imageUpload/image-service.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.scss']
})
export class ViewPhotosComponent implements OnInit {

  selectedFile: any ;
  imageUploadStatus : boolean = false;

  imageArray : any[]=[];

  constructor(private imageService : ImageServiceService,private dataProvider : DataProviderService) { }

  albumName : string = '';

  ngOnInit(): void {
    this.imageArray = [
    {
      "key" : "Aniket"
    },
    {
      "key" : "Rahul"
    },
    {
      "key" : "Aishwarya"
    },
    {
      "key" : "Brahmecha"
    },
    {
      "key" : "Dalvi"
    },   
  ]
  this.dataProvider.dataObs$.subscribe(data => {
    if (data) {
      this.albumName = data;
      this.fetchAllPhotos();
    }
  }, error => {
    console.log("error",error)
  });
  
  }

  onClickButton(){
    this.imageUploadStatus =true;
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res:any) => {
          this.onSuccess();
        },
        (err:any) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }

  fetchAllPhotos(){
    this.imageService.fetchAllImages(this.albumName).subscribe(
      (res:any) => {
        this.onSuccess();
        this.imageArray = res.data.data;
      },
      (err:any) => {
        this.onError();
      })
  };

  deletePhoto(element : any){
    this.imageService.deleteImage(this.albumName ,element.key).subscribe(
      (res:any)=>{
        this.fetchAllPhotos();
      },(err:any)=>{

      }
    )
  }

}
