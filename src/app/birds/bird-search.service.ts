import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Bird } from './bird';


@Injectable()
export class BirdSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Bird[]> {
    return this.http
      .get<Bird[]>(`app/birds/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
