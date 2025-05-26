import { Observable, of } from "rxjs";

export class LocalDataStore {
  mockData: any[] = [
    {
      id: "bec336a6-3885-4de6-8a47-cf8f9e104f65",
      title: "Bio",
      value: `Born and raised in Oconomowoc Wisconsin, Charlie grew up playing the piano at age four before picking up the trumpet a few years later, closely followed by the guitar and bass. Currently, he's a performer on all four instruments across numerous genres, having played pop at Lincoln Hall and jazz at the Green Mill in Chicago, soul at La 34 Riv in Paris, salsa at the Marcus Amphitheater in Milwaukee, New Orleans music at the Parkway Theater in Minneapolis, and big band jazz at the Majestic in Madison.

Charlie is a current member of the prolific Mama Digdown's Brass Band, performs in the bands of several solo acts such as Abi Arkley, Deryk G, and Max Newcomer (max.), and has been seen with bands such as Steely Dane, the Porchflowers, MIHNA, the Big Shoulders Brass Band, and Bear in the Forest. Charlie has appeared alongside and opened for numerous well known musicians and bands (including several grammy winners) such as Dreamer Isioma, Indigo D'Souza, Akie Bermiss, The Criticals, Divino Niño, Eric Gordon, and Big Sam.

In addition to performance, Charlie is an accomplished producer, having earned himself a name as both a mix and master engineer for indie musicians around Madison and Chicago, having been the chief engineer for MINHA and recording with several of the aformentioned acts. Charlie recently graduated in May of 2022 with a full ride music scholarship from UW Madison, and has produced a steady output of both compositional and production focused work with his extra free time in addition to keeping up his normal gig volume. When he has free time that doesn't go towards all of the above, Charlie loves to cook, meditate, write, and go out to see his fellow musicians perform.`,
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      type: "Other",
    },
    {
      location: "Schubas Tavern, Chicago IL",
      public: true,
      cover: "0",
      time: "8pm",
      ticketLink: "",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Deryk G.",
      date: "3/7/2025",
      id: "61683d96-556c-4dc3-8aab-fd5f6cec4947",
      title: "Mama Digdown's at the Green Mill (night 1)",
      type: "CalendarEvent",
    },
    {
      date: "3/8/2025",
      location: "Navy Pier",
      public: true,
      cover: "20",
      time: "8pm-12am",
      id: "71c187b0-646c-4e9d-8735-175fa54dc43b",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Victor Internet",
      title: "Mama Digdown's at the Green Mill (night 2)",
      type: "CalendarEvent",
    },
    {
      location: "Beat Kitchen",
      expiration: "1741046400",
      public: true,
      cover: "0",
      time: "7:30pm",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Deryk G.",
      date: "3/3/2025",
      id: "872949a8-4eb0-4b2e-863f-defc431abf6a",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      location: "the High Noon Saloon, Madison WI",
      expiration: "1741132800",
      public: true,
      cover: "0",
      time: "7:30pm",
      ticketLink:
        "https://www.ticketmaster.com/fat-tuesday-w-mama-digdowns-brass-madison-wisconsin-03-04-2025/event/0700623697F81C80?_gl=1*ro2w2r*_ga*ODg2ODE4NDA5LjE3Mzk5OTY5MjY.*_ga_8SLMG5MKYX*MTczOTk5NjkyNi4xLjEuMTczOTk5NjkyOS41Ny4wLjE4ODU2NjY4ODQ.",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      bandName: "Mama Digdown's Brass Band",
      date: "3/4/2025",
      image: "FatTuesday-HNS-WEB.jpg",
      id: "e6f03192-7f63-49cd-b487-30cb071958fc",
      title: "Mama Digdowns Mardi Gras",
      type: "CalendarEvent",
    },
    {
      id: "754eb9cc-28f8-4ae9-a546-dcc79fb0adbc",
      clientId: "e17b5580-90c1-705e-c925-c4c5fc95f771",
      title: "Bio",
      image: "My_Img.png",
      value: "../../assets/images/000026900038.jpg",
      type: "Image",
      location: "Bio",
    },
    // {
    //     "id": "d0448ef6-09b4-43df-a076-e76acf226568",
    //     "clientId": "e17b5580-90c1-705e-c925-c4c5fc95f771",
    //     "title": "Bio image",
    //     "image": "My_Img.png",
    //     "value": "../../assets/bio.jpg",
    //     "type": "Image",
    //     "location": "bio",
    // },
  ];

  removeFromLocalData(id: string): Observable<boolean> {
    let found = false;
    this.mockData = this.mockData.filter((v) => {
      found = found || v.id === id;
      return v.id !== id;
    });
    return of(found);
  }

  addToLocalData(value: any) {
    for (let i = 0; i < this.mockData.length; i++) {
      if (this.mockData[i].id === value.id) {
        this.mockData[i] = value;
        return of(true);
      }
    }
    this.mockData.push(value);
    return of(true);
  }
}
