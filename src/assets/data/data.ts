import { formatDate } from "@angular/common";
import { catchError, map, Observable, switchMap, tap } from "rxjs";
import { Gig } from "./data.model";
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

const bio: string = 'Born and raised in Oconomowoc Wisconsin, Charlie grew up playing the piano at a young age before picking up the trumpet, and later on, the guitar and bass. Currently, he\'s a performer on all four instruments across numerous genres, having played pop at Lincoln Hall in Chicago, soul at La 34 Riv in Paris, salsa at the Marcus Amphitheater in Milwaukee, and jazz at the Majestic in Madison. Charlie is a current member of Mama Digdown\'s Brass Band, the Darren Sterud Orchestra, Abi Arkley, Sunline, and the Deryk G. band, and has appeared alongside Serena Isioma and Divino Niño, all while pursuing a music and computer science bachelor\'s degree on a full ride music scholarship at UW Madison. \n\nIn addition to performance, Charlie is an accomplished producer, having earned himself a name as a both mix and master engineer for indie musicians around Madison, being the chief engineer for Sunline and recording with local acts such as Jenny 123, Deryk G, and Newco. Charlie recently graduated in May of 2022 and has been working on various recording projects with his extra free time in addition to keeping up his normal gig volume.';
@Injectable()
export class DataLoader {
  private gigs: Promise<Gig[] | undefined>;
  private bio;

  constructor(private http: HttpClient) {
    this.bio = bio;
    this.gigs = this.loadGigs();
  }

  public getBio(): string {
    return this.bio;
  }

  public async getGigs(): Promise<Gig[] | undefined> {
    return await this.gigs;
  }

  public async loadGigs(): Promise<Gig[] | undefined> {
    const gigs = await this.http.get<any>('https://api.github.com/repos/CharliePalm/PsuedoAPI/contents/charlieGigs.json').pipe(
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
    ).toPromise();
    return gigs;
  }

  private compareDates(a: Gig, b: Gig): number {
    return a.date < b.date ? -1 : 1
  }
}
