import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {MovieService} from '../services/movie.service';
import {Model} from '../services/data.repository';
import{ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../classes/movie';



@Component({
  selector: 'app-movieedit',
  templateUrl: './movieedit.component.html',
  styleUrls: ['./movieedit.component.css']
})
export class MovieeditComponent implements OnInit {
  movie: Movie;
  private message: string = '';
  constructor(private service: MovieService,private model: Model, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.service.getMovie(id).subscribe(res => this.movie = res);
  }

  updateMovieData(){
    // this.model.saveMovie(this.movie);
    // this.message="data was successfully update";
     this.service.updateMovie(this.movie).subscribe(res =>{
       this.movie = res;
       this.message="data was successfully update";
     });
  }

  formSubmited = false ;

  submitForm(form: NgForm){
    this.formSubmited= true;
    if(form.valid){
      this.updateMovieData();
      form.reset();
      this.formSubmited= false;
    }
  }

  getValidationMessage(state: any, thingName?: string) {
    let thing: string = state.path || thingName ;

    let messages: string[] ;
    if(state.errors) {
      for(let errorName in state.errors) {
        switch(errorName) {
          case "required":
          messages.push(`You must enter a ${thing}`);
          break ;
          case "minlength":
          messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
          break;
          case "pattern":
          messages.push(`The ${thing} can't contains special chatacters`);
          break;
        }
      }
    }
    return messages;
  }

}
