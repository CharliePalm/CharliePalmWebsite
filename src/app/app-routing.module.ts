import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ShowsPageComponent } from './shows-page/shows-page.component';

const routes: Routes = [
  { path: 'About', component: BioPageComponent },
  { path: 'Contact', component: ContactPageComponent },
  { path: 'Shows', component: ShowsPageComponent },
  { path: '', component: TitlePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
