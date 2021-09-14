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

async function GetEvents() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      {
        id: 1,
        nombre: 'Negocios digitales',
        descripcion: 'Cafe de administracion de negocios',
        telefono: '6044567896',
        fecha: '21-05-2019',
        sede: 'Politecnico JIC sede pobladoP40-604',
        organizadores: 'Facultad de administracion, Ingeniería informática',
        conferencias: 'Isabel Cañas, Julio Cano',
        categorias: ['web'],
      },
      {
        id: 2,
        nombre: 'Ceiba Dev Fest',
        descripcion: 'Hablemos de atributos de calidad',
        telefono: '6045678596',
        fecha: '21-07-2021',
        sede: 'Politecnico JIC sede pobladoP31-302',
        organizadores: 'Facultad de ingenierías',
        conferencias: 'Victor correa',
        categorias: ['social', 'cafe'],
      },
      {
        id: 3,
        nombre: 'Webinar Desarrollo FullStack',
        descripcion: 'Explicación del enfoque de los desarrolladores fullstack',
        telefono: '6042856732',
        fecha: '22-10-2021',
        sede: 'Politecnico JIC Auditorio Principal',
        organizadores: 'Facultad de Ingenieria',
        conferencias: 'Jenny Castaño',
        categorias: ['web', 'cafe'],
      },
      {
        id: 4,
        nombre: 'Design thinking',
        descripcion: 'el diseño es importante para la interfaz',
        telefono: '6042856732',
        fecha: '29-07-2021',
        sede: 'Politecnico JIC Auditorio Principal',
        organizadores: 'Facultad de comunicación audiovisual',
        conferencias: 'Julio Cano',
        categorias: ['web', 'social'],
      },
      {
        id: 5,
        nombre: 'Redes neuronales',
        descripcion: 'uso e implementación en la industria',
        telefono: '6042856732',
        fecha: '01-10-2021',
        sede: 'Politecnico JIC Auditorio Principal',
        organizadores: 'Facultad de comunicación audiovisual',
        conferencias: 'Julio Cano, Jenny Castaño',
        categorias: ['web', 'cafe'],
      },
      {
        id: 6,
        nombre: 'AWS',
        descripcion: 'Ventajas y desventajas de usar AWS',
        telefono: '6042883692',
        fecha: '22-11-2021',
        sede: 'Politecnico JIC Auditorio Principal',
        organizadores: 'JIC y EAFIT',
        conferencias: 'Fabian Rojas',
        categorias: ['social', 'cafe'],
      },
    ]
  } catch (error) {
    throw new Error(error);
  }
}

export { GetAtendees, GetSpeakers, GetEventManagers, GetCategories, GetCities, GetEvents };
