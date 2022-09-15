import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../dtos/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url = 'http://localhost:3000/cars'
  constructor(private http: HttpClient) {
  }

  create(body: Car): Observable<void> {
    return this.http.post<void>(this.url, body)
  }

  findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url)
  }

  edit(id: number, body: Car): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}`, body)
  }

  findById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.url}/${id}`)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
