import '../App.css';
import React from 'react';
import { Table } from 'antd';

class EventList extends React.Component {
  columns = [
    {
      title: 'Identificador',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
      title: 'Telefono',
      dataIndex: 'telefono',
      key: 'telefono',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Sede',
      dataIndex: 'sede',
      key: 'sede',
    },
    {
      title: 'Organizadores',
      dataIndex: 'organizadores',
      key: 'organizadores',
    },
    {
      title: 'Conferencistas',
      dataIndex: 'conferencias',
      key: 'conferencias',
    },
  ]

  constructor(){
    super()
    this.state = {
      datasource: [
        {
          id: 1,
          nombre: 'Negocios digitales',
          descripcion: 'Cafe de administracion de negocios',
          telefono:'6044567896',
          fecha: '21-05-2019',
          sede: 'Politecnico JIC sede pobladoP40-604',
          organizadores: 'Facultad de administracion, Ingeniería informática',
          conferencias: 'Isabel Cañas, Julio Cano'
        },
        {
          id: 2,
          nombre: 'Ceiba Dev Fest',
          descripcion: 'Hablemos de atributos de calidad',
          telefono:'6045678596',
          fecha: '21-07-2021',
          sede: 'Politecnico JIC sede pobladoP31-302',
          organizadores: 'Facultad de ingenierías',
          conferencias: 'Victor correa'
        },
        {
          id: 3,
          nombre: 'Webinar Desarrollo FullStack',
          descripcion: 'Explicación del enfoque de los desarrolladores fullstack',
          telefono:'6042856732',
          fecha: '22-10-2021',
          sede: 'Politecnico JIC Auditorio Principal',
          organizadores: 'Facultad de Ingenieria',
          conferencias: 'Jenny Castaño'
        },
        {
          id: 4,
          nombre: 'Design thinking',
          descripcion: 'el diseño es importante para la interfaz',
          telefono:'6042856732',
          fecha: '29-07-2021',
          sede: 'Politecnico JIC Auditorio Principal',
          organizadores: 'Facultad de comunicación audiovisual',
          conferencias: 'Julio Cano'
        },
        {
          id: 5,
          nombre: 'Redes neuronales',
          descripcion: 'uso e implementación en la industria',
          telefono:'6042856732',
          fecha: '01-10-2021',
          sede: 'Politecnico JIC Auditorio Principal',
          organizadores: 'Facultad de comunicación audiovisual',
          conferencias: 'Julio Cano, Jenny Castaño'
        },
        {
          id: 6,
          nombre: 'AWS',
          descripcion: 'Ventajas y desventajas de usar AWS',
          telefono:'6042883692',
          fecha: '22-11-2021',
          sede: 'Politecnico JIC Auditorio Principal',
          organizadores: 'JIC y EAFIT',
          conferencias: 'Fabian Rojas'
        }
      ]
    }
  }

  render(){
    return(
      <div className="event-list">
        <h1>Listado de eventos disponibles</h1>
        <br />
        <Table columns={this.columns} dataSource={this.state.datasource}></Table>
      </div>
    );
  }

}

export default EventList
