import React, { Fragment } from 'react';
import '../App.css';
import {
  GetSpeakers,
  GetEventManagers,
  GetCategories,
  GetCities,
} from '../infraestruture/retrieveData';
import { SaveEvent } from '../infraestruture/saveData';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Item } = Form;
const { TextArea } = Input;

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      speakers: [],
      categories: [],
      managers: [],
    };
  }

  async componentDidMount() {
    const categories = await GetCategories();
    const cities = await GetCities();
    const speakers = await GetSpeakers();
    const managers = await GetEventManagers();

    this.setState({
      categories,
      cities,
      speakers,
      managers,
    });
  }

  async saveData({ event: formData }) {
    const { managers, speakers, categories } = this.state;
    debugger;
    let conference = {
      id: null,
      nombre: formData.name,
      descripcion: formData.description,
      telefono: formData.phone,
      fecha: formData.date.toISOString(),
      ubicacion: {
        lugar: formData.place,
        direccion: formData.address,
        ciudad: formData.city,
      },
      sede: formData.site,
      organizadores: managers.filter((mng) =>
        formData.managers.some((dmng) => mng.nombreFacultad === dmng)
      ),
      conferencistas: speakers.filter((spk) =>
        formData.speakers.some((dspk) => spk.nombreUsuario === dspk)
      ),
      categorias: categories.filter((ctg) =>
        formData.categories.some((dctg) => ctg.nombreUsuario === dctg)
      ),
      asistentes: [],
      comentarios: [],
    };

    const res = await SaveEvent(conference);
    
  }

  render() {
    return (
      <Fragment>
        <div className='event-main'>
          <h1> Registro de eventos </h1>
          <br></br>
          <Form
            onFinish={(event) => this.saveData(event)}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout='horizontal'
          >
            <Item
              label='Nombre del evento'
              name={['event', 'name']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>

            <Item
              label='Fecha del evento'
              name={['event', 'date']}
              rules={[{ type: 'date', required: true }]}
            >
              <DatePicker></DatePicker>
            </Item>
            <Item label='Telefono' name={['event', 'phone']}>
              <Input></Input>
            </Item>
            <Item
              label='Sede'
              name={['event', 'site']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item
              label='Lugar'
              name={['event', 'place']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item label='Dirección' name={['event', 'address']}>
              <Input></Input>
            </Item>
            <Item label='Ciudad' name={['event', 'city']}>
              <Select>
                {this.state.cities.map((city) => (
                  <Select.Option key={city.nombre} value={city.nombre}>
                    {city.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item label='Organizadores' name={['event', 'managers']}>
              <Select mode='multiple'>
                {this.state.managers.map((manager) => (
                  <Select.Option
                    key={manager.nombreFacultad}
                    value={manager.nombreFacultad}
                  >
                    {manager.nombreFacultad}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item label='Conferencistas' name={['event', 'speakers']}>
              <Select mode='multiple'>
                {this.state.speakers.map((speaker) => (
                  <Select.Option
                    key={speaker.identificador}
                    value={speaker.identificador}
                  >
                    {speaker.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item label='Categorías' name={['event', 'categories']}>
              <Select mode='multiple'>
                {this.state.categories.map((category) => (
                  <Select.Option key={category.nombre} value={category.nombre}>
                    {category.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item
              label='Descripción'
              name={['event', 'description']}
              rules={[{ type: 'string', required: true }]}
            >
              <TextArea></TextArea>
            </Item>
            <Button type='primary' htmlType='submit '>
              {' '}
              Registrar evento{' '}
            </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Event;

{
  /*
rules={[
                {
                  type: 'number',
                  pattern: /\+57[1-9]{1}[0-9]{6}/,
                  required: true,
                },
              ]}
*/
}
