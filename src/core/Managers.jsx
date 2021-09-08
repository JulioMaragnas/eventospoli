import React, {Fragment} from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Item } = Form;

class Managers extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <h1> Registro de Organizadores </h1>
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
              label='Nombre Facultad'
              name={['managers', 'name']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Item
              label='Telefono'
              name={['managers', 'phone']}
              rules={[{ type: 'string', required: true }]}
            >
              <Input></Input>
            </Item>
            <Button type='primary' htmlType='submit '>
              Registrar Organizador
            </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Managers;
