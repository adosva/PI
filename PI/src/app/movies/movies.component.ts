import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  constructor(private moviesService: MoviesService, private router: Router) {
    moviesService.getAll().subscribe(data => this.movies = data);
  }

  ngOnInit(): void {
  }

  deleteMovie(id: string) {
    if(confirm("Estás seguro que quieres eliminar esta película?")) {
      this.moviesService.delete(id).subscribe(
        response => {
          alert(response)
          window.location.reload()
        },
        error => alert(error)
      )
    }
  }
}
