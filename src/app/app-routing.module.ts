import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ViewPhotosComponent } from './view-photos/view-photos.component';

const routes: Routes = [
 { path : 'add-album' , component : CreateAlbumComponent },
 { path : 'view-album' , component : ViewAlbumComponent },
 {path:'register',component:RegisterComponent},
 { path: 'login', component: LoginComponent },
 { path: 'view-photo', component: ViewPhotosComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
