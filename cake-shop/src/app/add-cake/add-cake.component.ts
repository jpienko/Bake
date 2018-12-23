import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, Validators, FormGroup} from  '@angular/forms';
import {Cakes} from "../main-list/main-list.component"


@Component({
  selector: 'app-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.scss']
})
export class AddCakeComponent implements OnInit {

  protected cakePic:string="assets/imgs/CakeShop.png";

  protected model = new Cakes;
  protected cake: FormGroup;
  piecePr:string = "0 PLN";

  constructor(private formBuilder: FormBuilder,) {
    this.cake = this.formBuilder.group({
      pic:[''],
      name: [''],
      description: [''],
      price:[''],
      pieces:[''],
      piecePrice:['']
    });
  }
  ngOnInit(){}
      
  protected save(){

  }


}
