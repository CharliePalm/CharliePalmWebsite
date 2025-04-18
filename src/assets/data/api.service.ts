import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { CalendarEvent, CLIENT_ID, UnsortedDynamoItem, UploadType, Image } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(
    private http: HttpClient,
  ) {}

  public loadClientData(): Observable<UnsortedDynamoItem[]> {
    return this.http.get<UnsortedDynamoItem[]>(`https://yhcok26mbf.execute-api.us-east-2.amazonaws.com/Prod/client_query?client_id=${CLIENT_ID}`).pipe(
      shareReplay(),
      catchError((error) => {
        return of([]);
      }),
    );
  }

  // todo: email list?
  // public sendEmail(params: { subject: string, body: string }) {
  //   if (!environment.production) return of(true);
  //   return this.authService.getToken().pipe(
  //     switchMap((token) => token ? this.http.post(this.url('email'), params, this.headers(token)) : of(undefined)),
  //     catchError((error) => {
  //       this.toastService.show('Error sending email request, please try again later', 'error');
  //       return of(false);
  //     }),
  //   );
  // }
}

export function getS3Path(pathToFile: string): string {
  return `https://client-uploads-877b7177.s3.us-east-2.amazonaws.com/${pathToFile}`
}

export function getS3PathFromImage(img?: Image): string | undefined {
  return img ? getS3Path(`${CLIENT_ID}/${UploadType.SiteImage}/${img.id}`) : undefined;
}

export function getS3PathFromEvent(event: CalendarEvent): string | undefined {
  return event ? getS3Path(`${CLIENT_ID}/${UploadType.EventImage}/${event.id}`) : undefined;
}
