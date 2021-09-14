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
      {
        nombre: 'Jenny Castaño',
        nombreUsuario: 'jcastano',
        identificador: '123456',
        relacionInstitucion: 'empleado',
        email: 'j@j.com',
        ciudad: {},
      },
      {
        nombre: 'Julio Cano',
        nombreUsuario: 'jcano',
        identificador: '654321',
        relacionInstitucion: 'estudiante',
        email: 'julio@j.com',
        ciudad: {},
      },
    ];
  } catch (error) {
    throw new Error(error);
  }
}

async function GetEventManagers() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      { telefono: '6045555555', nombreFacultad: 'Facultad ingenierías' },
      { telefono: '6045555555', nombreFacultad: 'Facultad Ciencias básicas' },
    ];
  } catch (error) {
    throw new Error(error);
  }
}

async function GetCategories() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [{ nombre: 'Web' }, { nombre: 'Social' }, { nombre: 'Marketing' }];
  } catch (error) {
    throw new Error(error);
  }
}

async function GetCities() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      { nombre: 'Medellín', departamento: 'Antioquia', pais: 'Colombia' },
      { nombre: 'Cali', departamento: 'Valle del cauca', pais: 'Colombia' },
      { nombre: 'Bogotá', departamento: 'Cundinamarca', pais: 'Colombia' },
    ];
  } catch (error) {
    throw new Error(error);
  }
}

async function GetEvents() {
  try {
    // return await axios('https://laapidejenny.com/organizadores');
    return [
      {
        "id": "613e82c91088cc1d689a296a",
        "nombre": "evento1",
        "descripcion": "el evento 1",
        "telefono": "324234324",
        "fecha": "2021-09-12T22:40:40.848+00:00",
        "ubicacion": {
          "lugar": "lugar 1",
          "direccion": "calle 1",
          "ciudad": "mede"
        },
        "sede": "sede 1",
        "organizadores": [{ "nombreFacultad": "fac1", "telefono": "4324234" }],
        "conferencistas": [
          {
            "nombre": "conf1",
            "nombreUsuario": "conf1",
            "identificador": "3r2343",
            "relacionInstitucion": "profesor",
            "email": "conf1@cc.cc",
            "ciudad": { "nombre": "medellin", "departamento": "ant", "pais": "col" }
          }
        ],
        "categorias": [{ "nombre": "categoria1" }],
        "asistentes": [
          {
            "nombre": "jenny",
            "nombreUsuario": "jennyc",
            "identificador": "1234",
            "relacionInstitucion": "estudiante",
            "email": "jenny@ff.ccc",
            "ciudad": { "nombre": "med", "departamento": "ant", "pais": "col" }
          }
        ],
        "comentarios": [
          { "textoComentario": "el comentario 1", "usuario": "jennyc" }
        ]
      },
      
    ];
  } catch (error) {
    throw new Error(error);
  }
}

export {
  GetAtendees,
  GetSpeakers,
  GetEventManagers,
  GetCategories,
  GetCities,
  GetEvents,
};
