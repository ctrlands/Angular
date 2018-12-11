import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10000, name: '赵铁柱' },
      { id: 10001, name: '王铁蛋' },
      { id: 10002, name: '李二狗' },
      { id: 10003, name: '李麻子' },
      { id: 10004, name: '周建国' },
      { id: 10005, name: '胡翠花' },
      { id: 10006, name: '网泥马' },
      { id: 10007, name: 'Undefined' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10000;
  }
}