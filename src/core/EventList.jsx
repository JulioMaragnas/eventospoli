import '../App.css';
import React from 'react';
import { Table, Tag } from 'antd';
import { GetEvents } from '../infraestruture/retrieveData';

class EventList extends React.Component {
  columns = [
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
      title: 'Ubicación',
      dataIndex: 'ubicacion',
      key: 'ubicacion',
      render: (location) => (
        <>
          {
            <span>
              {location.direccion} - {location.ciudad} - {location.lugar}
            </span>
          }
        </>
      ),
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
      render: (managers) => (
        <>
          {managers.map((manager) => (
            <span> {manager.nombreFacultad}, </span>
          ))}
        </>
      ),
    },
    {
      title: 'Conferencistas',
      dataIndex: 'conferencistas',
      key: 'conferencistas',
      render: (speakers) => (
        <>
          {speakers.map((speaker) => (
            <span>
              {speaker.nombre} - {speaker.relacionInstitucion}
            </span>
          ))}
        </>
      ),
    },
  ];

  constructor() {
    super();
    this.state = {
      columns: this.columns,
      dataSource: [],
    };
  }

  async componentDidMount() {
    const datasource = await GetEvents();
    // const { data: datasource } = await GetEvents();
    debugger;
    let categories = datasource
      .reduce((cat, ev) => [...cat, ...ev.categorias.map((c) => c.nombre)], [])
      .filter((cat, index, self) => self.indexOf(cat) === index)
      .map((cat) => ({ text: cat, value: cat }));

    this.setState({
      datasource,
      columns: [
        ...this.state.columns,
        {
          title: 'Categorías',
          dataIndex: 'categorias',
          key: 'categorias',
          filters: categories,
          onFilter: (value, record) => record.categorias.some(ctg => ctg.nombre === value),
          render: (cat) => (
            <>
              {cat.map((x) => (
                <Tag color='blue' key={x.nombre}>
                  {x.nombre}
                </Tag>
              ))}
            </>
          ),
        },
      ],
    });
  }

  render() {
    return (
      <div className='event-list'>
        <h1>Listado de eventos disponibles</h1>
        <br />
        <Table
          columns={this.state.columns}
          dataSource={this.state.datasource}
        ></Table>
      </div>
    );
  }
}

export default EventList;
