import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  readonly INITIAL_ID = 11;
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    if (this.heroesListIsEmpty(heroes)){
      return this.INITIAL_ID;
    }
    return this.getLastId(heroes) + 1;
  }

  heroesListIsEmpty(heroes: Hero[]): boolean {
    return heroes.length === 0;
  }

  getLastId(heroes: Hero[]): number {
    const heroesIds: number[] = heroes.map(hero => hero.id);
    return Math.max(...heroesIds);

  }
}
