import { formatDate } from "@angular/common";
import { Gig } from "./data.model";

const gigs: Gig[] = [
  {
    description: 'mama digdown\'s brass band at brass fest',
    date: new Date('24 September 2022'),
    time: '8pm',
    venue: 'capitol brewery, Asheville NC',
    bandName: 'mama digdown\'s brassband',
  },
  {
    description: 'sunline opening for creature canyon at the bur oak',
    date: new Date('3 October 2022'),
    time: '7pm',
    venue: 'the bur oak, madison wi',
    bandName: 'Sunline',
  },
  {
    description: 'the porch flowers n friends at the terrace',
    date: new Date('15 October 2022'),
    time: '7pm',
    venue: 'the terrace at memorial union, madison wi',
    bandName: 'mama digdown\'s brassband',
  },
  {
    description: 'abi arkley + d\'funk and the grease monkeys',
    date: new Date('22 October 2022'),
    time: '8pm',
    venue: 'downtown beloit',
    bandName: 'abi arkley',
  },
  {
    description: 'mama digdown\'s at the parkway',
    date: new Date('5 November 2022'),
    time: '8pm',
    venue: 'the parkway theater, mpls ms',
    bandName: 'mama digdown\'s brass band',
  },
  {
    description: 'mama digdown\'s at the crystal corner',
    date: new Date('3 December 2022'),
    time: '8pm',
    venue: 'the crystal corner, madison wi',
    bandName: 'mama digdown\'s brass band',
  },
];

const bio: string = 'Born and raised in Oconomowoc Wisconsin, Charlie grew up playing the piano at a young age before picking up the trumpet, and later on, the guitar and bass. Currently, he\'s a performer on all four instruments across numerous genres, having played pop at Lincoln Hall in Chicago, soul at La 34 Riv in Paris, salsa at the Marcus Amphitheater in Milwaukee, and jazz at the Majestic in Madison. Charlie is a current member of Mama Digdown\'s Brass Band, the Darren Sterud Orchestra, Abi Arkley, Sunline, and the Deryk G. band, and has appeared alongside Serena Isioma and Divino Niño, all while pursuing a music and computer science bachelor\'s degree on a full ride music scholarship at UW Madison. \n\nIn addition to performance, Charlie is an accomplished producer, having earned himself a name as a both mix and master engineer for indie musicians around Madison, being the chief engineer for Sunline and recording with local acts such as Jenny 123, Deryk G, and Newco. Charlie recently graduated in May of 2022 and has been working on various recording projects with his extra free time in addition to keeping up his normal gig volume.';

export class DataLoader {
  private gigs;
  private bio;

  constructor(customGigs?: Gig[], customBio?: string) {
    this.gigs = customGigs ?? gigs
    this.bio = customBio ?? bio;
  }

  public getBio(): string {
    return this.bio;
  }

  public getGigs(): Gig[] {
    const todayGig: Gig = { date: new Date() };
    return this.gigs.sort(this.compareDates).filter((gig) => {
      return this.compareDates(gig, todayGig) === 1;
    });
  }

  private compareDates(a: Gig, b: Gig): number {
    return a.date < b.date ? -1 : 1
  }
}
