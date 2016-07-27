import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  styleUrls: ['app/heroes.component.css'],
  templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
