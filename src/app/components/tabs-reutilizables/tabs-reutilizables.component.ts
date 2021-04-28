import { Component, OnInit, Input } from '@angular/core';
import { TabsPrincipal } from '../../interfaces/interfaces.futbol';

@Component({
  selector: 'app-tabs-reutilizables',
  templateUrl: './tabs-reutilizables.component.html',
  styleUrls: ['./tabs-reutilizables.component.scss'],
})
export class TabsReutilizablesComponent implements OnInit {

  @Input() tabsRe: TabsPrincipal[];
  @Input() showTabs = false;

  constructor() { 
    console.log('constructor ',this.tabsRe);
    
  }
  
  ngOnInit() {
    console.log('init ', this.tabsRe);
    
  }

  

}
