import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import{ActivatedRoute, Router} from '@angular/router';
import {Model} from '../services/data.repository';
import {Movie} from '../classes/movie';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
movie: Movie;
  constructor(private service: MovieService, private route: ActivatedRoute, private model: Model) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getMovie(id);

  }

  getMovie(id: number){
   // id = this.route.snapshot.params['id'];
    return this.service.getMovie(id).subscribe(res => this.movie = res);
  }

  deleteMovie(){
   let id = this.route.snapshot.params['id']
   this.model.deleteMovie(id);
  }


}
