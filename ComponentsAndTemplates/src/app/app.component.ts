import { Component, Input } from '@angular/core';
import { Hero } from './class/hero';

import { AdService } from './module/DynamicComponents/ad.service'
import { AdItem } from './module/DynamicComponents/ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /* 通过  变量初始化  方式赋值
  title = 'ComponentsAndTemplates';
  myHero = 'Windstorm'; */

  /* 通过  构造函数  方式赋值 
  title: string;
  myHero: string;
  constructor () {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  } */

  title = 'Tour of Heroes';
  /* heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado']; */
  heroes = [
    new Hero(10000, 'Windstorm'),
    new Hero(10000, 'Bombasto'),
    new Hero(10000, 'Magneta'),
    new Hero(10000, 'Tornado')
  ];
  myHero = this.heroes[0];

  /* 绑定到用户输入事件 */
  clickMessage = '';
  onClickMe () {
    this.clickMessage = 'you are my hero!';
  }
  /* 通过$event对象取得用户输入 */
  values = '';
  values1 = '';
  onKey(event: any) {
    // this.values += event.target.value + ' | ';
    this.values += event.key + ' | ';
  }
  onKey1(value: string) {
    // this.values += event.target.value + ' | ';
    this.values += value + ' | ';
  }
  /* 按键事件过滤（通过 key.enter） */
  valueEnter = '';
  onEnter(value: string) {
    this.valueEnter = value;
  }
  /* 失去焦点事件 (blur)  */
  valueBlur = '';
  update(value: string) {
    this.valueBlur = value;
  }

  heroes1 = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes1.push(newHero);
    }
  }

  /* 组件交互（Component Interaction） */
  @Input() hero: Hero;
  @Input('master') masterName: string;


  ads: AdItem[];
  constructor(
    private adService: AdService
  ) {};

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  // color: 'yellow';
  color: string;


}
