import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { BgImgComponent } from './background-image/background-img.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { ShowsPageComponent } from './shows-page/shows-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AnimationsComponent } from './animations/animations.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SocialLinksComponent,
    TitlePageComponent,
    BgImgComponent,
    BioPageComponent,
    ShowsPageComponent,
    ContactPageComponent,
    AnimationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
