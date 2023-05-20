import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: any = {
    title: '',
    synopsis: '',
    year: '',
    cover: ''
  }

  id: any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id: string = params['id'];
      this.id = id
      this.moviesService.getSingle(id).subscribe(data => this.movie = data);
    })
  }

  saveMovie() {
    const data = {
      title: this.movie.title,
      synopsis: this.movie.synopsis,
      year: this.movie.year,
      cover: this.movie.cover,
    }

    this.moviesService.edit(this.id, data).subscribe(
      response => {
        alert(response)
        this.router.navigate(['/movies'])
      },
      error => alert(error)
    )
  }

}
