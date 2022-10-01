import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../services/imageUpload/image-service.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit {

  selectedFile: any ;
  imageUploadStatus : boolean = false;

  imageArray : any[]=[];

  constructor(private imageService : ImageServiceService) { }

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
  

}
