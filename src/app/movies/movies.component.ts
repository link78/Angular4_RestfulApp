import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../classes/movie';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // movies : Movie[] ;
  // movi: Movie;
  
    constructor() { }
  
    ngOnInit() {
      //this.service.getMovies().subscribe(res => this.movies = res);
    }
  
  }
