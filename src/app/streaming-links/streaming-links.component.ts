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
        link: 'https://open.spotify.com/artist/3zlaQJdTTg0CyoW693Hovo',
      },
      {
        src: '../../assets/images/icons8-apple-logo-32.png',
        link: 'https://music.apple.com/us/artist/sunline/1560591453',
      },
      {
        src: '../../assets/images/icons8-youtube-logo-32.png',
        link: 'https://www.youtube.com/channel/UCNyryoz0caIMXEnqFPFiOCA',
      },
    ];
  }

  navigate(index: number) {
    window.open(this.images[index].link, "_blank");
  }
}
