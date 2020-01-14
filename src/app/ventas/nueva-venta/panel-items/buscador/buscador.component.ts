import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  search($event) {
    let q = $event.target.value;

  }


}
