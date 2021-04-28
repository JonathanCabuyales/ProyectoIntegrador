import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @Input() titulo: string;
  @Input() tabsModal: boolean = true;
  constructor(
    private _modalCerrar: ModalController
  ) { }

  ngOnInit() {}

  cerrarModal(){
    this._modalCerrar.dismiss();
  }

}
