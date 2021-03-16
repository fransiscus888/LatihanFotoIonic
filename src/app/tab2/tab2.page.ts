import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tebak
  random : number;
  pathfoto = ""
  constructor() {}
  guess(){
   this.random = Math.floor(Math.random() * 10);
   alert(this.random)
    if(this.tebak==this.random){
      this.pathfoto = "foto.jpg"
      console.log("Bener");
    }
  }
}
