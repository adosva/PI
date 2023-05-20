import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie = {
    title: '',
    synopsis: '',
    year: '',
    cover: ''
  }

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  saveMovie() {
    const data = {
      title: this.movie.title,
      synopsis: this.movie.synopsis,
      year: this.movie.year,
      cover: this.movie.cover,
    }

    this.moviesService.create(data).subscribe(
      response => {
        alert(response)
        this.router.navigate(['/movies'])
      },
      error => alert(error)
    )
  }
}
