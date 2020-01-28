import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase/firebase.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.css"]
})
export class BuscadorComponent implements OnInit {
  constructor(private fs: FirebaseService) {}

  searchForm = new FormGroup({
    inputNombre: new FormControl(''),
    selectFabricante: new FormControl(null),
    selectGenero: new FormControl(null),
    selectCategoria: new FormControl(null),
  });

  ngOnInit() {}

  clearFilter() {
    console.log("clearing filters")
    this.fs.filterByCategoria(null);
    this.fs.filterByGenero(null);
    this.fs.filterByFabricante(null);
    this.fs.filterByNombre(['']);
    this.searchForm.reset();

  }

  selCategoria(categoria: string) {
    this.fs.filterByCategoria(categoria);
  }

  selGenero(genero: string) {
    console.log(genero);
    this.fs.filterByGenero(genero);
  }

  selFabricante(fabricante: string) {
    this.fs.filterByFabricante(fabricante);
  }
  selNombre(kw: string) {
    console.log(kw);
    const keywords = kw
      .toLowerCase()
      .trim()
      .split(" ");
    console.log(keywords);
    this.fs.filterByNombre(keywords);
  }
}