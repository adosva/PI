import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL = 'http://localhost:8000/api/movies'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.URL)
  }

  getSingle(id: string) {
    return this.http.get(`${this.URL}/${id}`)
  }

  create(data: any) {
    return this.http.post(this.URL, data)
  }

  edit(id: string, data: any) {
    return this.http.put(`${this.URL}/${id}`, data)
  }

  delete(id: string) {
    return this.http.delete(`${this.URL}/${id}`)
  }
}
