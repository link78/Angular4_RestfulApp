import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../classes/movie';
import {Model} from '../services/data.repository';
import{ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
movies : Movie[] ;
movi: Movie;
private genre ;
  constructor(private service: MovieService,private model: Model,
     route: ActivatedRoute) {

    route.params.subscribe(r => {
      this.genre = r["genre"] || null ;
    })
   }

  ngOnInit() {
    this.service.getMovies()
    .subscribe(res => this.movies = res);
  }
  

  get genres(): string[] {
    return this.model.getMovies()
    .map(m=> m.genre)
    .filter((genre,index,array) => array.indexOf(genre)== index) ;
  }
}
