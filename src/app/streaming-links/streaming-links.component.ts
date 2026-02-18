import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-streaming-links",
    templateUrl: "./streaming-links.component.html",
    styleUrls: ["./streaming-links.component.css"],
    standalone: false
})
export class StreamingLinksComponent implements OnInit {
  public images: any[] = [];
  public ngOnInit(): void {
    this.images = [
      {
        src: "../../assets/images/icons8-spotify-32.png",
        link: "https://open.spotify.com/artist/0J5nDtveXpAr8knXSPvjn2?si=hp6IIXewT5aso8mBPbxUdg",
      },
      {
        src: "../../assets/images/icons8-apple-logo-32.png",
        link: "https://music.apple.com/us/artist/charlie-palm/1819083240",
      },
      {
        src: "../../assets/images/icons8-youtube-logo-32.png",
        link: "https://youtube.com/channel/UC7cgwHVOv0jUoWDLZwdojtw?si=L_0jFxJU2P7BUNLe",
      },
    ];
  }

  navigate(index: number) {
    window.open(this.images[index].link, "_blank");
  }
}
