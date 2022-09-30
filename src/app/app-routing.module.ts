import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';

const routes: Routes = [
 { path : 'add-album' , component : CreateAlbumComponent },
 { path : 'view-album' , component : ViewAlbumComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
