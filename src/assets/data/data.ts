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
    return of([]);
    /*
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
    */
  }

  public loadBio(): Observable<string[]> {
    return of([
      `Born and raised in Oconomowoc Wisconsin, Charlie grew up playing the piano at age four before picking up the trumpet a few years later, closely followed by the guitar and bass. Currently, he's a performer on all four instruments across numerous genres, having played pop at Lincoln Hall and jazz at the Green Mill in Chicago, soul at La 34 Riv in Paris, salsa at the Marcus Amphitheater in Milwaukee, brass band at the Parkway Theater in Minneapolis, and big band at the Majestic in Madison.`,
      `Charlie is a current member of madison area bands Mama Digdown's Brass Band, the Darren Sterud Orchestra, MINHA, Jenny 123, the Porchflowers, Panchromatic Steel, and Immigré, as well as being involved with and performing in the bands of solo acts such as Abi Arkley, Deryk G, and Max Newcomer (max.). Charlie has appeared alongside and opened for numerous well known musicians and bands (including several grammy winners) such as Dreamer Isioma, Indigo D'Souza, Akie Bermiss, The Criticals, Divino Niño, and Big Sam, all while pursuing his bachelor's degree on a full ride music scholarship at UW Madison.`,
      `In addition to performance, Charlie is an accomplished producer, having earned himself a name as both a mix and master engineer for indie musicians around Madison, being the chief engineer for MINHA and recording with his the many aforementioned bands he's currently a member of. Charlie recently graduated in May of 2022 and has been working on various recording projects with his extra free time in addition to keeping up his normal gig volume. When he has free time that doesn't go towards all of the above, Charlie loves to cook, meditate, write, and go out to see his fellow musicians perform. Charlie is also a programmer, having built the very website you're browsing!`,
    ]);
    /** 
    return this.http.get<any>('https://api.github.com/repos/CharliePalm/PsuedoAPI/contents/charlieBio.json').pipe(
      switchMap((response) => {
        return this.http.get<string[]>(response.download_url);
      }),
      catchError((e) => {
        return [];
      }),
    );
    */
  }

  private compareDates(a: Gig, b: Gig): number {
    return a.date < b.date ? -1 : 1
  }
}
