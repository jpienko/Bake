import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, Validators, FormGroup} from  '@angular/forms';
import {Cakes} from "../main-list/main-list.component"
import { BootstrapOptions } from '../../../node_modules/@angular/core/src/application_ref';


@Component({
  selector: 'app-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.scss']
})
export class AddCakeComponent implements OnInit {

  protected model = new Cakes;
  protected cake: FormGroup;
  protected piecePr:string = "0 PLN";
  protected addPic:boolean=false;
  

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddCakeComponent>, 
              @Inject(MAT_DIALOG_DATA) data) {
    this.cake = this.formBuilder.group({
      pic:[''],
      name: [''],
      description: [''],
      price:[''],
      pieces:[''],
      piecePrice:['']
    });
    if(data!=null){
      this.model = data.model;
    }
    
  }
  ngOnInit(){
    this.model.piecePrice = 0;
    if(this.model.pic == undefined){
      this.addPic = true;
    }
  }
      
  protected save(){
    let data = {
        model: this.model
    }
    this.dialogRef.close(data);
  }

  protected portions(i:number){
    this.model.pieces = i;
    if(this.model.price!=undefined)
    {
      this.model.piecePrice = (this.model.price/this.model.pieces);
    }
    
  }

  protected countPieceValue(i:number):number{ 

    return this.model.piecePrice = (i/this.model.pieces);
  }

  protected onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.model.pic = event.target.result;
        this.addPic = false;
      }
    }
  }

}
