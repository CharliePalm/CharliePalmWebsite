import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { StreamingLinksComponent } from './streaming-links/streaming-links.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { ShowsPageComponent } from './shows-page/shows-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SocialLinksComponent,
    TitlePageComponent,
    BioPageComponent,
    ShowsPageComponent,
    ContactPageComponent,
    SidebarComponent,
    StreamingLinksComponent,
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
