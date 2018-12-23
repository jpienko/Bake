import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, Validators, FormGroup} from  '@angular/forms';


@Component({
  selector: 'app-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.scss']
})
export class AddCakeComponent implements OnInit {
    constructor() {}
    ngOnInit(){}
      


}
export interface DialogData {
    animal: string;
    name: string;
  }