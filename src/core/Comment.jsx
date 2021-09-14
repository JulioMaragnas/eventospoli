import React, { Fragment } from 'react';
import '../App.css';
import { Form, Input, Button, Select } from 'antd';
import { GetEvents } from '../infraestruture/retrieveData';
import { SaveEvent } from '../infraestruture/saveData'

const { Item } = Form;
const { TextArea } = Input;

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  async componentDidMount(){
    const events = await GetEvents();
    this.setState({
      events
    })
  }

  async saveData({comment}) {
    const conference = this.state.events.find(conf => conf.id === comment.event);
    conference = {
      ...conference,
      comentarios: comment.comment
    }
    const res = await SaveEvent()
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
              Comentar evento
            </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Comments;
