import { formatDate } from "@angular/common";
import { Observable, switchMap, tap } from "rxjs";
import { Gig } from "./data.model";
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from "@angular/core";
const key = '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';
const bio: string = 'Born and raised in Oconomowoc Wisconsin, Charlie grew up playing the piano at a young age before picking up the trumpet, and later on, the guitar and bass. Currently, he\'s a performer on all four instruments across numerous genres, having played pop at Lincoln Hall in Chicago, soul at La 34 Riv in Paris, salsa at the Marcus Amphitheater in Milwaukee, and jazz at the Majestic in Madison. Charlie is a current member of Mama Digdown\'s Brass Band, the Darren Sterud Orchestra, Abi Arkley, Sunline, and the Deryk G. band, and has appeared alongside Serena Isioma and Divino Niño, all while pursuing a music and computer science bachelor\'s degree on a full ride music scholarship at UW Madison. \n\nIn addition to performance, Charlie is an accomplished producer, having earned himself a name as a both mix and master engineer for indie musicians around Madison, being the chief engineer for Sunline and recording with local acts such as Jenny 123, Deryk G, and Newco. Charlie recently graduated in May of 2022 and has been working on various recording projects with his extra free time in addition to keeping up his normal gig volume.';
@Injectable()
export class DataLoader {
  private gigs: Observable<Gig[]>;
  private bio;

  constructor(private http: HttpClient) {
    this.bio = bio;
    console.log(this.http);
    this.gigs = this.loadGigs();
  }

  public getBio(): string {
    return this.bio;
  }

  public getGigs(): Observable<Gig[]> {
    const todayGig: Gig = { date: new Date() };
    return this.gigs.pipe(
      tap((gigs) => {
        gigs.sort(this.compareDates).filter((gig) => {
          return this.compareDates(gig, todayGig) === 1;
        });
      }));
    }

  public loadGigs(): Observable<Gig[]> {
    const gigs$ = this.http.get<any>('https://api.github.com/repos/CharliePalm/PsuedoAPI/contents/charlieGigs.json', { headers: { authorization: 'bearer ' + key }}).pipe(
      switchMap((response) => {
        console.log(response);
        const url = response.download_url;
        return this.http.get<any[]>(url);
      }),
    );
    gigs$.subscribe();
    return gigs$;
  }

  private compareDates(a: Gig, b: Gig): number {
    return a.date < b.date ? -1 : 1
  }
}
