import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAlbumServiceService } from '../services/create-album-service.service';
import { DataProviderService } from '../services/data-provider.service';
@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
  form: any;
  name : string = "";
  description : string = "";
  constructor(private createAlbumService : CreateAlbumServiceService,private router : Router,private dataProvider : DataProviderService) { }

  ngOnInit(): void {
  }

  submitForm() {
     this.createAlbumService.createAlbum(this.name,this.description).subscribe(
      (res:any) => {
        this.dataProvider.setData(res.albumName);
        this.router.navigate([`${'/view-album'}`]);
      },
      (err:any) => {
        console.log("failure",err)
        this.dataProvider.setData(this.name);
        this.router.navigate([`${'/view-photo'}`]);
      });
  }

}
