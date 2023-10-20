import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streaming-links',
  templateUrl: './streaming-links.component.html',
  styleUrls: ['./streaming-links.component.css']
})
export class StreamingLinksComponent implements OnInit {
  public images: any[] = [];
  public ngOnInit(): void {
    this.images = [
      {
        src: '../../assets/images/icons8-spotify-32.png',
        link: 'https://open.spotify.com/artist/5m6HwRHQBzSeOMf5MDvMeL?si=su4fhTAkQJeRWj5HmLvfnw',
      },
      {
        src: '../../assets/images/icons8-apple-logo-32.png',
        link: 'https://music.apple.com/us/artist/sunline/1560591453',
      },
      {
        src: '../../assets/images/icons8-youtube-logo-32.png',
        link: 'https://www.youtube.com/channel/UC-T8b7k1hYf2RVjaJa77RwA',
      },
    ];
  }

  navigate(index: number) {
    window.open(this.images[index].link, "_blank");
  }
}
