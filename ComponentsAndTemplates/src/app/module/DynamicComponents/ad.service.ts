import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombbasto', bio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),
      new AdItem(HeroJobAdComponent, {headline: 'Hiriing for serveral positions', body: 'submit your resume today!'}),
      new AdItem(HeroJobAdComponent, {name: 'opening in all departments', bio: 'apply today'})
    ];
  }

  constructor() { }
}
