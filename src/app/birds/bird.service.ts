import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Bird } from './bird';

@Injectable()
export class BirdService {
  private birdsUrl = 'app/birds'; // URL to web api

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getBirds() {
    return this.http
      .get<Bird[]>(this.birdsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getBird(id: number): Observable<Bird> {
    return this.getBirds().pipe(
      map(birds => birds.find(bird => bird.id === id))
    );
  }

  // tslint:disable-next-line:typedef
  save(bird: Bird) {
    if (bird.id) {
      return this.put(bird);
    }
    return this.post(bird);
  }

  // tslint:disable-next-line:typedef
  delete(birds: Bird) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.birdsUrl}/${birds.id}`;

    return this.http.delete<Bird>(url).pipe(catchError(this.handleError));
  }

  // Add new Bird
  // tslint:disable-next-line:typedef
  private post(bird: Bird) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Bird>(this.birdsUrl, bird)
      .pipe(catchError(this.handleError));
  }

  // Update existing Bird
  // tslint:disable-next-line:typedef
  private put(bird: Bird) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.birdsUrl}/${bird.id}`;

    return this.http.put<Bird>(url, bird).pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
