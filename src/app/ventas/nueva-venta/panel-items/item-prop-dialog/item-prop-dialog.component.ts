import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-item-prop-dialog',
  templateUrl: './item-prop-dialog.component.html',
  styleUrls: ['./item-prop-dialog.component.css']
})
export class ItemPropDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ItemPropDialogComponent>) { }

  itemPropForm = new FormGroup({
    talle: new FormControl(0),
    color: new FormControl(0)
  });

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close(this.itemPropForm.value);
}

}
