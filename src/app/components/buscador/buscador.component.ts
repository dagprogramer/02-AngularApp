import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
heroes:any[]=[];
miTermino:string;
  constructor(private activatedRoute:ActivatedRoute,private heroesService:HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      this.miTermino=params['termino'];
      this.heroes=this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

}
