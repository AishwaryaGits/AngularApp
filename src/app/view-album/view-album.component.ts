import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CreateAlbumServiceService } from '../services/create-album-service.service';
import { DataProviderService } from '../services/data-provider.service';
import { GetAlbumService } from '../services/get-album.service';


export interface PeriodicElement {
  id:number,
  albumName: string,
  albumDesc: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, albumName: 'Hydrogen', albumDesc: "Beaches"},
  {id: 2, albumName: 'Helium', albumDesc: "Beaches"},
  {id: 3, albumName: 'Lithium', albumDesc: "Beaches"},
  {id: 4, albumName: 'Beryllium', albumDesc: "Beaches"},
  {id: 5, albumName: 'Boron', albumDesc: "Beaches"},
  {id: 6, albumName: 'Carbon', albumDesc: "Beaches"},
  {id: 7, albumName: 'Nitrogen', albumDesc: "Beaches"},
  {id: 8, albumName: 'Oxygen', albumDesc: "Beaches"},
  {id: 9, albumName: 'Fluorine', albumDesc: "Beaches"},
  {id: 10, albumName: 'Neon', albumDesc: "Beaches"},
];

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})


export class ViewAlbumComponent implements OnInit {

  displayedColumns: string[] = ['id', 'albumName', 'albumDesc','deleteAlbum'];
  dataSource : any;
  ngOnInit(): void {
    this.createDataSource();
    this.dataSource = [...ELEMENT_DATA];
  }
  
  constructor(private router: Router,private dataProvider : DataProviderService,private getAlbum : GetAlbumService,
    private createAlbum  : CreateAlbumServiceService){

  }
  @ViewChild(MatTable) table: any;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  deleteData(value : any){
    console.log("values",value)
    this.createAlbum.deleteAlbum(value.id).subscribe((res: any)=>{
      this.createDataSource();
    },(err: any)=>{
      console.log("failure",err);
    })
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  viewPhotos(element:any){
    console.log("element",element)
    this.dataProvider.setData(element.albumName);
    this.router.navigate([`${'/view-photo'}`]);
  }

  createDataSource(){
    this.getAlbum.getAllAlbumData().subscribe((res:any) => {
      this.dataSource = res.data.data;
    },
    (err:any) => {
      console.log("failure",err);
    })
  }

}
