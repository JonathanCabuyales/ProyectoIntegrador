import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  @Input() modalInfo: boolean = false;

  date:Date = new Date();
  year:string;
  day:string;
  month:number;
  complete:string;
  


  constructor() {
   
  
    console.log(this.modalInfo);
    
    
    
  }

  ngOnInit() {
    
    
    
  }

}
