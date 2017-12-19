import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {MovieService} from '../services/movie.service';
import {Model} from '../services/data.repository';
import{ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../classes/movie';



@Component({
  selector: 'app-moviecreate',
  templateUrl: './moviecreate.component.html',
  styleUrls: ['./moviecreate.component.css']
})
export class MoviecreateComponent  {
message: string = '';
movie: Movie = new Movie() ;
  constructor(private model: Model) { }

 // ngOnInit() {
   // this.updateMovieData();
  //}

  updateMovieData(){
  this.model.saveMovie(this.movie);
  this.message="data was successfully created";
    // this.model.saveMovie(this.movie).subscribe(res =>{
    //      this.movie = res;
    //     // this.message="data was successfully created";
    //   });
   
   
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




