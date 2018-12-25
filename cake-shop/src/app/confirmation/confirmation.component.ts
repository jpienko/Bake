import { Component, OnInit,Inject,Injectable } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  protected cakeName:string;
  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>, 
    @Inject(MAT_DIALOG_DATA) data) { 
      this.cakeName = data;
    }

  ngOnInit() {
  }

  protected delete(){
    let data = {
      delete:"true"
    };
    this.dialogRef.close(data);

  }

  protected cancel(){
    let data = {
      delete:"false"
    };
    this.dialogRef.close(data);

  }

}
