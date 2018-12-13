import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './module/click-me/click-me.component';
import { AdBannerComponent } from './module/DynamicComponents/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './module/DynamicComponents/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './module/DynamicComponents/hero-profile/hero-profile.component';
import { AdDirective } from './module/DynamicComponents/ad.directive';
import { AdService } from './module/DynamicComponents/ad.service';
import { HighlightDirective } from './module/AttributeDirectives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ]
})
export class AppModule { }
