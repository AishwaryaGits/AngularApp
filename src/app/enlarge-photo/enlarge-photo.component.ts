import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-enlarge-photo',
  templateUrl: './enlarge-photo.component.html',
  styleUrls: ['./enlarge-photo.component.scss']
})
export class EnlargePhotoComponent implements OnInit {

  constructor(private dataProvider : DataProviderService,private router : Router) { }

  imageDetails :any;

  ngOnInit(): void {
    this.dataProvider.imageDataObs$.subscribe((res:any)=>{
      
      this.imageDetails = res
      console.log(this.imageDetails.base64Image)
    },(err:any)=>{

    })
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
