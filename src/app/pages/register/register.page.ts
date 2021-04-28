import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Registro } from 'src/app/interfaces/interfaces.futbol';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _db: AngularFirestore,
    private _loadingCtrl: LoadingController,
    private _route: Router,
    private _toastCtrl: ToastController,
    private _auth: AuthService
  ) {
    this.crearFormulario();
   }

  ngOnInit() {
  }

  //funciones para validar los campos del formulario
  get NombreError(){
    return this.formularioRegistro.get('nombre').invalid && this.formularioRegistro.get('nombre').touched;
  }
  get ApellidoError(){
    return this.formularioRegistro.get('apellido').invalid && this.formularioRegistro.get('apellido').touched;
  }
  get CedulaError(){
    return this.formularioRegistro.get('cedula').invalid && this.formularioRegistro.get('cedula').touched;
  }
  get CorreoError(){
    return (this.formularioRegistro.get('correo').invalid && this.formularioRegistro.get('correo').touched);
  }
  get PasswError(){
    return (this.formularioRegistro.get('passw').invalid && this.formularioRegistro.get('passw').touched);
  }
  get PasswConfError(){
    return this.formularioRegistro.get('confpassw').invalid && this.formularioRegistro.get('confpassw').touched;
  }
  get telfError(){
    return this.formularioRegistro.get('telf').invalid && this.formularioRegistro.get('telf').touched;
  }

  


  //funcion para registrar usuarios
  async guardar(){

    if( this.formularioRegistro.invalid ){

      console.log('Error en registro ', this.formularioRegistro);
      return Object.values( this.formularioRegistro.controls ).forEach( validador => {
        validador.markAsTouched();
        
      });
    }
    
    const correo = this.formularioRegistro.value.correo;
    const passw = this.formularioRegistro.value.passw;
    const cargando = await this._loadingCtrl.create({
      message: 'Guardando datos, espere por favor',
    });
    const toast = await this._toastCtrl.create({
      message: 'el correo escrito ya existe.',
      position:'middle',
      duration: 1000,
    });
    this._auth.registrarUsuario( correo, passw, this.formularioRegistro )
    .then( resp => {
      const registro: Registro = {
        uid: resp.user.uid,
        nombre: this.formularioRegistro.value.nombre,
        apellido: this.formularioRegistro.value.apellido,
        cedula: this.formularioRegistro.value.cedula,
        correo: this.formularioRegistro.value.correo,
        contrasenia: this.formularioRegistro.value.passw,
        telf: this.formularioRegistro.value.telf,
        foto: ''
      }
      cargando.present();
      this.guardarDatos( registro );
      setTimeout(() => {
        cargando.dismiss();
        this._route.navigate(['/home']);
      }, 3000);
    })
    .catch( error => {
      toast.present();
    });
    
  }


  //funcion para crear el formulario
  crearFormulario(){
    this.formularioRegistro = this._formBuilder.group({
      nombre   : ['', [Validators.required, Validators.minLength(5)]],
      apellido : ['', [Validators.required, Validators.minLength(5)]],
      cedula   : ['', [Validators.required, Validators.minLength(10)]],
      telf   : ['', [Validators.required, Validators.minLength(10)]],
      correo   : ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      passw    : ['', [Validators.required, Validators.minLength(8)]],
      confpassw: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  //funcion para guardar los datos
  guardarDatos(registroUsuario: Registro){
    
    if( !this.formularioRegistro.invalid ){
      
      
    }
    //this._db.collection('registroPerfil').add(registroUsuario);
  }


}
