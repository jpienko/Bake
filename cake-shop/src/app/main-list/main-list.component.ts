import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  protected cakeList:Cakes[]=[];
  protected listIsEmpty:boolean=false;
  constructor() { }

  ngOnInit() {

    this.cakeList.push(   {'pic':'1','name':'2','description':'3','price':1,"pieces":2,"piecePrice":3} );
    if(this.cakeList.length<1){
      this.listIsEmpty=true;
    }
  }

}

export class Cakes{

  public pic:string;
  public name:string;
  public description:string;
  public price:number;
  public pieces:number;
  public piecePrice:number;

}
