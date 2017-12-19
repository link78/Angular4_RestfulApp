import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {MovieService} from './movie.service';
import {Movie} from '../classes/movie';
import 'rxjs/add/operator/map';



@Injectable()
export class Model {

movies: Movie[];
movie: Movie;

private locator =(m: Movie, id: number) => m.id == id ;

    constructor(private service: MovieService)
    {
        this.service.getMovies().subscribe(res => this.movies = res);
    }
// grabing all movies

    getMovies(): Movie[] {
        return this.movies;
    }
// grabing one movie
    getMovie(id : number): Movie {
        return this.movies.find(m=> this.locator(m,id));
    }

// saving movie

saveMovie(m: Movie) {
    if( m.id == 0 || m.id == null) {
       this.service.saveMovie(m).subscribe(data => this.movies.push(data));
       
    } else {
        this.service.updateMovie(m).subscribe(data =>{
            let index = this.movies.findIndex(item => this.locator(item, data.id));
            this.movies.splice(index, 1 , data);
        })
    }

    
}

// deleting movie

deleteMovie(id: number) {
    this.service.deleteMovie(id).subscribe(() => {
        let index = this.movies.findIndex( m=> this.locator(m, id));
        if( index > -1){
            this.movies.splice(index, 1);
        }
    });
    
}

    getSingleMovie(id: number) {
        return this.service.getMovie(id).subscribe(res => this.movie = res);
    }



    
}