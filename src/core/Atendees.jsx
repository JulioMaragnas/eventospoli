import '../App.css';
import React, { Fragment } from 'react';
import { GetCities, GetEvents } from '../infraestruture/retrieveData';
import { SaveEvent } from '../infraestruture/saveData'
import { Form, Input, Button, Select } from 'antd';

const { Item } = Form;

class Atendees extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      profiles: [],
      events: []
    };
  }

  async componentDidMount() {
    const profiles = [
      { id: 1, profile: 'Empleado' },
      { id: 2, profile: 'Estudiante' },
      { id: 3, profile: 'Visitante' },
    ];

    const cities = await GetCities();
    const events = await GetEvents()

    this.setState({
      cities,
      events,
      profiles,
    });
  }

  async saveData({atendee}){
    const conf = this.state.events.find(conf => conf.id === atendee.event)
    const conference = {
      ...conf,
      asistentes: [...conf.asistentes, {
        nombre: atendee.name,
        nombreUsuario: atendee.name,
        identificador: atendee.id,
        relacionInstitucion: atendee.profile,
        email: atendee.email,
        ciudad: this.state.cities.find(city => city.nombre === atendee.city)
      }]
    }

    const res = await SaveEvent(conference);

  }

  render() {
    return (
      <Fragment>
        <h1> Registro de asistentes </h1>
        <div className='event-main'>
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
            <Item label='Evento' name={['atendees', 'event']}>
              <Select>
                {this.state.events.map((event) => (
                  <Select.Option key={event.id} value={event.id}>
                    {event.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item
              label='Cédula'
              name={['atendees', 'id']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item
              label='Nombre completo'
              name={['atendees', 'name']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item
              label='Email'
              name={['atendees', 'email']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item
              label='Ciudad'
              name={['atendees', 'city']}
              rules={[{ type: 'string', required: true }]}
            >
              <Select>
                {this.state.cities.map((city) => (
                  <Select.Option key={city.nombre} value={city.nombre}>
                    {city.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item
              label='Perfil'
              name={['atendees', 'profile']}
              rules={[{ type: 'number', required: true }]}
            >
              <Select>
                {this.state.profiles.map((profile) => (
                  <Select.Option key={profile.id} value={profile.id}>
                    {profile.profile}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Button type='primary' htmlType='submit '>
              {' '}
              Registrar asistente{' '}
            </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Atendees;
