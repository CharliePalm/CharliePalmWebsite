import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-social-links',
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.scss'],
    standalone: false
})
export class SocialLinksComponent implements OnInit {
  public images: any[] = [];
  public ngOnInit(): void {
    this.images = [
      {
        src: '../assets/images/icons8-instagram-32.png',
        link: 'https://www.instagram.com/charlie_palm/?hl=en',
      },
      {
        src: '../assets/images/icons8-twitter-32.png',
        link: 'https://mobile.twitter.com/charliepalm_',
      },
      {
        src: '../assets/images/icons8-facebook-32.png',
        link: 'https://www.facebook.com/charlie.palm.942',
      },
    ];
  }

  navigate(index: number) {
    window.open(this.images[index].link, "_blank");
  }
}
