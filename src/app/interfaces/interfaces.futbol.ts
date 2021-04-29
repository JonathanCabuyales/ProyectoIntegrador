export interface dataSlidesInterface{
    img: string,
    titulo: string,
    desc: string
}

export interface MenuOpt{
    icon: string,
    name: string,
    redirecTo:string,
}

export interface TabsPrincipal {
  tab: string;
  iconName: string;
  nombre: string;
}

export interface Registro{
  uid: string;
  nombre: string;
  apellido: string;
  cedula: string;
  correo: string;
  contrasenia: string;
  telf?:string;
  foto?:string;
}

export interface RespUbicaciones {
  ciudad: string;
  numCanchas: string;
  precio: string[] | string;
  id: string;
  ubicacion: string;
  telf: Telf;
  desc: string;
  redes: Rede | string;
  nomLocal: string;
  otrosServicios: OtrosServicios | string;
  latLng: LatLng;
  pais: string;
  horarios?: Horarios;
  nombre?: string;
}

export interface Horarios {
  semana: semana[];
  finSemana: finSemana[];
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface OtrosServicios {
  resp: string;
  verificacion:boolean;
  servicios?: [];
}

export interface Rede {
  sitioweb: string;
  facebook: string;
}

export interface Telf {
  celular: string[] | string;
  convencional?: string;
}

/* export interface NumCanchas {
  cubiertas?: Cubiertas;
  descubiertas?: Descubiertas;
} */


export interface semana{
  dias: string[];
  hora: string;
}

export interface finSemana{
  dias: string[];
  hora: string;
}
/* 
export interface Descubiertas {
  num: string;
  tipo?: string;
  descubiertas?: string;
}

export interface Cubiertas {
  num: string;
  tipo?: string;
  cubiertas?: string;
} */