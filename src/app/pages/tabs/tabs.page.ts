import { Component, OnInit } from '@angular/core';
import { TabsReService } from 'src/app/services/tabs-re.service';
import { TabsPrincipal } from '../../interfaces/interfaces.futbol';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tabs: TabsPrincipal[] = [];

  constructor(
    private _tabsService: TabsReService
  ) { 
    this.getTabs();
   }

  ngOnInit() {
    
  }


  getTabs(){
    this._tabsService.getTabsPrincipales()
    .subscribe( (tab) => {
      console.log(tab);
      
      this.tabs.push(...tab);
      
    })
  }

}
