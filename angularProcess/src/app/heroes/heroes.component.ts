import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
/* import { HEROES } from '../mock-heroes'; */
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],

})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  /* heroes = HEROES; */
  /* hero = {
    id: 1,
    name: 'Windstorm'
  }; */

  selectedHero: Hero;
  

  constructor(private heroServices: HeroService) { }
  getHeroes(): void {
    this.heroServices.getAllHeroes().subscribe(heroes => this.heroes = heroes);
    //this.heroes = this.heroServices.getAllHeroes();
  }

  ngOnInit() {
    /* 这是一个生命周期钩子，Angular在创建完组件后很快就会调用ngOnInit,这里是放置初始化逻辑的好地方 */
    this.getHeroes();
  }

  /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } */
  onSelect(hero): void {
    this.selectedHero = hero;
  }
  

}
