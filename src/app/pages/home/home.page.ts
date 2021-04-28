import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formularioLogin: FormGroup;

  constructor(
    private _authFire: AngularFireAuth,
    private _fb: FormBuilder,
    private _alertCtrl: AlertController,
    private _loadCtrl: LoadingController,
    private _router: Router,
    private _storareService: StorageServiceService
  ) {
    this.validarLogin();
    this.crearFormulario();
  }

  //funciones para validar los campos
  get errorCorreo(){
    return this.formularioLogin.get('correo').invalid && this.formularioLogin.get('passw').touched;
  }
  get errorPassw(){
    return this.formularioLogin.get('passw').invalid && this.formularioLogin.get('passw').touched;
  }

  async login(){

    if( this.formularioLogin.invalid ){
      return Object.values( this.formularioLogin.controls ).forEach( validador => {
        validador.markAsTouched();
      })
    }
    const alert = await this._alertCtrl.create({
      header: 'Error',
      message: 'Correo o contraseña incorrecta',
      buttons: ['ok']
    });

    const cargando = await this._loadCtrl.create({
      message: 'Cargando componentes',
      backdropDismiss: false,
      spinner:'crescent',
    });
    
    const correo = this.formularioLogin.value.correo;
    const passw = this.formularioLogin.value.passw;
    
    
    this._authFire.signInWithEmailAndPassword(correo, passw)
    .then( user => {
      console.log(user);
      
      cargando.present()

      setTimeout(() => {
        cargando.dismiss();
        this._storareService.guardarData('uid', {"uid" : user.user.uid} );
        this._storareService.cargarData('skipPresentacion')
        .then( m => {
          console.log(m);
          
          if( !m || m === null ){
            this._router.navigateByUrl('/presentacion')
          }else{
            this._router.navigateByUrl('/tabs/ubicaciones')
            
          }
        });
      }, 3000);
      
    })
    .catch( err => {
      console.log(err);
      alert.present();
    });
  }


  crearFormulario(){
    this.formularioLogin = this._fb.group({
      correo: ['cabuyales.jonathan@gmail.com', Validators.required],
      passw : ['123456789', Validators.required]
    });
  }

  //funcion para validar si ya ha hecho login
  validarLogin(){
    this._storareService.cargarData('uid')
    .then( userId => {
      if( !userId.uid ){
        return;
      }
      this._router.navigateByUrl('/tabs/ubicaciones');
    })
    .catch( ()=>{
      console.log('No se ha podido obtener el User id');
      
    });
  }
}
