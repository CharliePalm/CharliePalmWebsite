import { formatDate } from "@angular/common";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";
import { Gig } from "./data.model";
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class DataLoader {
  private gigs: Observable<Gig[]>;
  private bio: Observable<string[]>;

  constructor(private http: HttpClient) {
    this.bio = this.loadBio();
    this.gigs = this.loadGigs();
    this.gigs.subscribe();
    this.bio.subscribe();
  }

  public getBio(): Observable<string[]> {
    return this.bio;
  }

  public getGigs(): Observable<Gig[]> {
    return this.gigs;
  }

  public loadGigs(): Observable<Gig[]> {
    return this.http.get<any>('https://api.github.com/repos/CharliePalm/PsuedoAPI/contents/charlieGigs.json').pipe(
      switchMap((response) => {
        return this.http.get<Gig[]>(response.download_url);
      }),
      map((gigs) => {
        const todayGig: Gig = { date: new Date() };
        return gigs
        .map((g) => {
          return {
            ...g,
            date: new Date(g.date),
          };
        })
        .sort(this.compareDates)
        .filter((gig: Gig) => {
          return this.compareDates(gig, todayGig) === 1;
        });
      }),
      catchError((e) => {
        return [];
      }),
    );
  }

  public loadBio(): Observable<string[]> {
    return this.http.get<any>('https://api.github.com/repos/CharliePalm/PsuedoAPI/contents/charlieBio.json').pipe(
      switchMap((response) => {
        return this.http.get<string[]>(response.download_url);
      }),
      catchError((e) => {
        return [];
      }),
    );
  }

  private compareDates(a: Gig, b: Gig): number {
    return a.date < b.date ? -1 : 1
  }
}
