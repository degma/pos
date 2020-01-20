import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  constructor( private fs: FirebaseService) { }

  searchValue: string;

  ngOnInit() {
  }


  selCategoria(categoria: string){
    this.fs.filterByCategoria(categoria);
  }

  selGenero(genero: string){
    this.fs.filterByGenero(genero);
  }

  selFabricante(fabricante: string){
    this.fs.filterByFabricante(fabricante);
  }
  selNombre(){

    const keywords = this.searchValue.toLowerCase().trim().split(' ');
    this.fs.filterByNombre(keywords);
  }


}
