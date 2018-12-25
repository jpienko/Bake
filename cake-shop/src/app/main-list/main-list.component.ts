import { Component, OnInit, Inject,Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import  { timer } from 'rxjs';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { AddCakeComponent} from '../add-cake/add-cake.component'
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

const STORAGE_KEY = 'cakey';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  entryComponents:[AddCakeComponent,ConfirmationComponent]
})
export class MainListComponent implements OnInit {

  protected cakeList:Cakes[]=[];
  protected listIsEmpty:boolean=false;
  protected toastText:string;
  public showloader: boolean = false;      
  private subscription: Subscription;
  private timer: Observable<any>;

  constructor(protected localStorage: LocalStorage,private dialog: MatDialog) { 

  }

  ngOnInit() {
    if (!this.hasOwnProperty(STORAGE_KEY)) {
      this.getStorage();
    }      
  }

  protected add(): void {
    const dialogRef = this.dialog.open(AddCakeComponent, {});
    dialogRef.afterClosed().subscribe(
      data => { 
        if(data!=undefined){
          this.cakeList.push(data.model);
          this.toastText = "DODAŁEŚ NOWE CIASTO!";
          if (!this.hasOwnProperty(STORAGE_KEY)) {
            this.storage();
          }        
          this.setTimer();
        } 
      }
    );
  }

protected edit(cake:Cakes){
  let index = this.cakeList.findIndex(x=> x==cake)
  const dialogRef = this.dialog.open(AddCakeComponent, { data: {model:cake}});
    dialogRef.afterClosed().subscribe(
      data => { 
        if(data!=undefined){
          this.cakeList[index] = data.model;
          if (!this.hasOwnProperty(STORAGE_KEY)) {
            this.storage();
          }  
        } 
      }
    );   
  }

  protected delete(cake:Cakes){
    const dialogRef1 = this.dialog.open(ConfirmationComponent, { data: cake.name});
    dialogRef1.afterClosed().subscribe(
      data => { 
        if(data.delete=='true'){
          let index = this.cakeList.findIndex(x=> x==cake);
          this.cakeList.splice(index,1);
          if (!this.hasOwnProperty(STORAGE_KEY)) {
            this.storage();
          }  
          this.toastText = "USUNĄŁEŚ CIASTO!";
          this.setTimer();
        } 
      }
    );   
  }

  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription){
      this.subscription.unsubscribe();
    }
  }

  public setTimer(){
    this.showloader = true;
    this.timer = timer(5000);
    this.subscription = this.timer.subscribe(() => {
      this.showloader = false;
    });
  }

  private storage(){
    this.localStorage.setItem('cakes', this.cakeList).subscribe(() => {});
  }

  private getStorage(){
    this.localStorage.getItem<Cakes[]>('cakes').subscribe((cakes:Cakes[]) => {
      this.cakeList = cakes;  
      if(this.cakeList.length<1){
        this.listIsEmpty=true;
      }  
    });
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
