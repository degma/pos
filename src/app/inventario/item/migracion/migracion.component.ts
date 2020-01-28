import { Component, OnInit } from "@angular/core";
import items from "./bkp.json";

@Component({
  selector: "app-migracion",
  templateUrl: "./migracion.component.html",
  styleUrls: ["./migracion.component.css"]
})
export class MigracionComponent implements OnInit {
  articulos = [];

  constructor() {}

  substrings(str1) {
    const array1 = str1.split(" ");
    for (let x = 0, y = 1; x < str1.length; x++, y++) {
      array1[x] = str1.substring(x, y);
    }
    const combi = [];
    let temp = "";
    const slent = Math.pow(2, array1.length);

    for (let i = 0; i < slent; i++) {
      temp = "";
      for (let j = 0; j < array1.length; j++) {
        if (i & Math.pow(2, j)) {
          temp += array1[j];
        }
      }
      if (temp !== "") {
        combi.push(temp);
      }
    }
    console.log(combi);
    return combi;
  }

  ngOnInit() {
    items.map(a =>
      this.articulos.push({...a, keywords: this.substrings(a.nombre)})

    );
  }
}
