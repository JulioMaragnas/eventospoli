import '../App.css';
import React from 'react';
import { Table, Tag } from 'antd';
import { GetEvents } from '../infraestruture/retrieveData';

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
  ];

  constructor() {
    super();
    this.state = {
      columns: this.columns,
      dataSource: []
    }
  }

  async componentDidMount() {

    const datasource = await GetEvents();
    let categories = datasource
      .reduce((cat, ev) => [...cat, ...ev.categorias], [])
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
          onFilter: (value, record) => record.categorias.indexOf(value) >= 0,
          render: (cat)=> (<>
            {
              cat.map(x => (
                <Tag color="blue" key={x}> { x } </Tag>
              ))
            }
          </>)
        },
      ]
    })
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
