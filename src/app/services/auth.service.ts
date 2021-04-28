import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { Registro } from '../interfaces/interfaces.futbol';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _authFirebase: AngularFireAuth,
  ) { }

  registrarUsuario( correo:string, passw: string, formularioRegistro: FormGroup){
    return this._authFirebase.signInWithEmailAndPassword( correo, passw );
  }
}
