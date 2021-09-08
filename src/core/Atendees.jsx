import '../App.css';
import React, { Fragment } from 'react';
import { GetCities } from '../infraestruture/retrieveData';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Item } = Form;

class Atendees extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      profiles: [],
    };
  }

  async componentDidMount() {
    const profiles = [
      { id: 1, profile: 'Empleado' },
      { id: 2, profile: 'Estudiante' },
      { id: 3, profile: 'Visitante' },
    ];

    const cities = await GetCities();

    this.setState({
      cities,
      profiles,
    });
  }

  render() {
    return (
      <Fragment>
        <h1> Registro de asistentes </h1>
        <div className='event-main'>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout='horizontal'
          >
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
