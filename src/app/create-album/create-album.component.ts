import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateAlbumServiceService } from '../services/create-album-service.service';
@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
  form: any;
  name : string = "";
  description : string = "";
  constructor(private createAlbumService : CreateAlbumServiceService) { }

  ngOnInit(): void {
  }

  submitForm() {
     this.createAlbumService.createAlbum(this.name,this.description);
  }

}
