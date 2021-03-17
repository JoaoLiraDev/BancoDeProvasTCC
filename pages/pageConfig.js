import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Config() {

  return (
    <div>
      <Menu />
  <Form>
        <ButtonGroup vertical>
      <br />  
          <Button>Seu perfil</Button>
      <br />
          <Button>Notificações</Button>
      <br />
          <Button>Relate um problema</Button>
      <br />
          <Button>Avalie-nos</Button>
      <br />
          <Button>Salvar</Button>
        </ButtonGroup>
  </Form>

        <Smallfooter />
        
    </div>
    );

};

export default Config;