import React, { Fragment } from 'react';
import '../App.css';
import { Form, Input, Button, Select } from 'antd';

const { Item } = Form;
const { TextArea } = Input;

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          id: 1,
          nombre: 'Negocios digitales',
        },
        {
          id: 2,
          nombre: 'Ceiba Dev Fest',
        },
        {
          id: 3,
          nombre: 'Webinar Desarrollo FullStack',
        },
        {
          id: 4,
          nombre: 'Design thinking',
        },
        {
          id: 5,
          nombre: 'Redes neuronales',
        },
        {
          id: 6,
          nombre: 'AWS',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className='event-main'>
          <h1>Comentario de eventos</h1>
          <br />
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
            <Item label='Evento' name={['comment', 'event']}>
              <Select>
                {this.state.events.map((event) => (
                  <Select.Option key={event.id} value={event.id}>
                    {event.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            <Item
              label='Nombre del asistente'
              name={['comment', 'nameAtendee']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item
              label='Comentario'
              name={['comment', 'comment']}
              rules={[{ type: 'string', required: true }]}
            >
              <TextArea></TextArea>
            </Item>
            <Button type='primary' htmlType='submit '>
              {' '}
              Comentar evento{' '}
            </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Comments;
