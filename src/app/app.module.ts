import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { MoviesComponent} from './movies/movies.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviecreateComponent } from './moviecreate/moviecreate.component';
import { MovieeditComponent } from './movieedit/movieedit.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovieService} from './services/movie.service';
 import { Model} from './services/data.repository';



const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch:'full'},
  {path: 'movies', component: MoviesComponent,
  children:[
    {path: '', component: MovielistComponent},
    {path: 'movies', component: MovielistComponent},
    {path: 'movies/:genre', component: MovielistComponent},
    {path: 'create', component: MoviecreateComponent},
    {path: ':id', component:MoviedetailsComponent },
    {path: ':id/edit', component: MovieeditComponent}
  ]
}
  

];


@NgModule({
  declarations: [
    AppComponent, MoviesComponent,
    MovielistComponent,
    MoviecreateComponent,
    MovieeditComponent,
    MoviedetailsComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, 
    RouterModule.forRoot(routes),

    
  ],
  providers: [MovieService, Model],
  bootstrap: [AppComponent]
})
export class AppModule { }
