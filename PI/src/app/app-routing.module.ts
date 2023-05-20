import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { HomeComponent } from "./home/home.component";
import { CreateMovieComponent } from "./create-movie/create-movie.component";
import { EditMovieComponent } from "./edit-movie/edit-movie.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/create',
    component: CreateMovieComponent
  },
  {
    path: 'movies/edit/:id',
    component: EditMovieComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
