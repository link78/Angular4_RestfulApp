import { Injectable  } from '@angular/core';
import {Http, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Movie} from '../classes/movie';
import 'rxjs/add/operator/map';



@Injectable()
export class MovieService {
 private url= "http://localhost:8500/movies";
movies: Movie[];
  constructor(private http: Http) { }

// // grab all movies
// getMovies():Observable<Movie[]> {
//   return this.http.get(this.url).map(res => res.json());
// }


// // grab one movie
// getMovie(id: number):Observable<Movie>{
//   return this.http.get(`${this.url}/${id}`).map(res => res.json());
// }

// // edit movie or update movie

// updateMovie(m: Movie): Observable<Movie> {
//   return this.http.put(`${this.url}/${m.id}`, m).map(res => res.json());
// }

// //create and save movie
// saveMovie(movie: Movie) :Observable<Movie> {
//   return this.http.post(this.url, movie).map(res => res.json());
// }


// // delete data
// deleteMovie(id: number): Observable<Movie> {
//   return this.http.delete(`${this.url}/${id}`).map(res => res.json());
// }



// grab all movies
getMovies():Observable<Movie[]> {
  return this.http.get(this.url).map(res => res.json());
}


// grab one movie
getMovie(id: number):Observable<Movie>{
  return this.sendRequest(RequestMethod.Get,`${this.url}/${id}` );
  //.http.get(`${this.url}/${id}`).map(res => res.json());
}

// edit movie or update movie

updateMovie(m: Movie): Observable<Movie> {
  return this.sendRequest(RequestMethod.Put, `${this.url}/${m.id}`, m);
 // return this.http.put(`${this.url}/${m.id}`, m).map(res => res.json());
}

//create and save movie
saveMovie(movie: Movie) :Observable<Movie> {
  return this.sendRequest(RequestMethod.Post, this.url, movie);
  // return this.http.post(this.url, movie).map(res => res.json());
}


// delete data
deleteMovie(id: number): Observable<Movie> {
  return this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
  // return this.http.delete(`${this.url}/${id}`).map(res => res.json());
}









// creating http method
private sendRequest (verb: RequestMethod, url: string, body?: Movie): Observable<Movie> {
  return this.http.request(new Request({
    method: verb,
    url: url,
    body: body
  })).map(res => res.json());
}
}
