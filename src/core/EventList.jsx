import '../App.css';
import React from 'react';
import { Table } from 'antd';

const EventList = () => {
  const datasource = [];
  const columns = [
    {
      title: 'Identificador',
      dataIndex: '1',
      key: 'id',
    },
    {
      title: 'Nombre',
      dataIndex: '2',
      key: 'nombre',
    },
    {
      title: 'Descripción',
      dataIndex: '3',
      key: 'descripcion',
    },
    {
      title: 'Telefono',
      dataIndex: '4',
      key: 'telefono',
    },
    {
      title: 'Fecha',
      dataIndex: '5',
      key: 'fecha',
    },
    {
      title: 'Sede',
      dataIndex: '6',
      key: 'sede',
    },
    {
      title: 'Organizadores',
      dataIndex: '7',
      key: 'organizadores',
    },
    {
      title: 'Conferencistas',
      dataIndex: '8',
      key: 'conferencistas',
    },
  ]
  
  return(
    <div className="event-list">
      <h1>Listado de eventos disponibles</h1>
      <br />
      <Table columns={columns} ></Table>
    </div>
  );
};

export default EventList
