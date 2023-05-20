import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id: string = params['id'];
      this.moviesService.getSingle(id).subscribe(data => this.movie = data);
    })
  }

  deleteMovie(id: string) {
    if(confirm("Estás seguro que quieres eliminar esta película?")) {
      this.moviesService.delete(id).subscribe(
        response => {
          alert(response)
          this.router.navigate(['/movies'])
        },
        error => alert(error)
      )
    }
  }
}
