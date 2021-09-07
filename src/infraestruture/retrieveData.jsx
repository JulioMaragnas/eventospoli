import axios from 'axios';

async function GetAtendees() {
  try {
    return await axios('https://laapidejenny.com/asistentes');
  } catch (error) {
    throw new Error(error);
  }
}

async function GetSpeakers() {
  try {
    // return await axios('https://laapidejenny.com/conferencistas');
    return [ 
      {nombre: 'Jenny Castaño',nombreUsuario: 'jcastano',identificador: '123456',relacionInstitucion: 'empleado',email: 'j@j.com',ciudad: {}}, 
      {nombre: 'Julio Cano',nombreUsuario: 'jcano',identificador: '654321',relacionInstitucion: 'estudiante',email: 'julio@j.com',ciudad: {}}, 
    ]
  } catch (error) {
    throw new Error(error);
  }
}

async function GetEventManagers() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      {telefono: '6045555555', nombreFacultad: 'Facultad ingenierías'},
      {telefono: '6045555555', nombreFacultad: 'Facultad Ciencias básicas'},
    ]
  } catch (error) {
    throw new Error(error);
  }
}

async function GetCategories() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      {nombre: 'Web'},
      {nombre: 'Social'},
      {nombre: 'Marketing'}
    ]
  } catch (error) {
    throw new Error(error);
  }
}

async function GetCities() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      { nombre: 'Medellín', departamento: 'Antioquia', pais: 'Colombia'},
      { nombre: 'Cali', departamento: 'Valle del cauca', pais: 'Colombia'},
      { nombre: 'Bogotá', departamento: 'Cundinamarca', pais: 'Colombia'},
    ]
  } catch (error) {
    throw new Error(error);
  }
}

export { GetAtendees, GetSpeakers, GetEventManagers, GetCategories, GetCities };
