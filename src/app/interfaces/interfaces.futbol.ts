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
  horario?: Horario;
  numCanchas: NumCanchas;
  precio: string[] | string;
  id: string;
  ubicacion: string;
  telf: Telf;
  desc: string;
  redes: Rede | string;
  nomLocal: string;
  otrosServicios: OtrosServicio | OtrosServicios2 | string;
  latLng: LatLng;
  pais: string;
  horarios?: Horarios;
  nombre?: string;
}

export interface Horarios {
  horas: string[];
  dias: string[];
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface OtrosServicios2 {
  resp: string;
}

export interface OtrosServicio {
  servicios: string[];
  resp: string;
}

export interface Rede {
  sitioweb: string;
  facebook: string;
}

export interface Telf {
  celular: string[] | string;
  conencional?: string;
  convencional?: string;
}

export interface NumCanchas {
  cubiertas?: Cubiertas;
  descubiertas?: Descubiertas;
}

export interface Descubiertas {
  num: string;
  tipo?: string;
  descubiertas?: string;
}

export interface Cubiertas {
  num: string;
  tipo?: string;
  cubiertas?: string;
}

export interface Horario {
  horas: string[];
  dias?: string[];
  dia?: string[];
}