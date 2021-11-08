import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { parseCookies } from 'nookies';
import Router from 'next//router';
import { AuthContext } from '../contexts/AuthContext';

function ModalForm(props){

    var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = ano + '-' + mes + '-' + dia;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  const [agendamento, setAgendamento] = useState({
    TITULO_LEMBRTE: "",
    DT_LEMBRETE: "",
});

const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
});

const { 'MQtoken': token } = parseCookies();
    const sendAgendamento = async e => {

        setResponse({ formSave: true });
        if((agendamento.DT_LEMBRETE < dataAtual)){
            alert('Data Inválida')
          }else{
        try {
            const res = await fetch('http://localhost:8080/CreateQuest/cadastroLembrete', {
                method: 'POST',
                body: JSON.stringify(agendamento),
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            });

            const responseEnv = await res.json();


            if (responseEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.mensagem
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.mensagem
                });

                setTimeout(() => {
                    Router.reload()
                }, 2500);
            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: "Erro: Falha ao cadastrar lembrete!"
            });
        }

    }
};


    const { register, handleSubmit, formState: { errors } } = useForm();


    const onChangeInput = e => setAgendamento({ ...agendamento, [e.target.name]: e.target.value });

  return (
    <div>
        

        <img src="/add.svg" alt="add" width={37} height={37} className="zoom" id="add" onClick={toggle}/> 
       
      <Modal isOpen={modal} toggle={toggle} className="NovoAgendamento">
        {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
        {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}
        <ModalHeader toggle={toggle}>Novo Lembrete</ModalHeader>
        <Form onSubmit={handleSubmit(sendAgendamento)} noValidate>
        <ModalBody>
            
                <Row>
                    <Col className="col-md-10">
                        <Label for="TITULO_LEMBRTE">Título:</Label>
                        <Input className="form-control mr-sm-2" type="text" name="TITULO_LEMBRTE" id="TITULO_LEMBRTE"{...register("TITULO_LEMBRTE", { required: 'Insira um título.'})} placeholder="Insira um título:" onChange={onChangeInput} />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-10">
                        <Label for="DT_LEMBRETE">Dia do Lembrete:</Label>
                        <Input className="form-control mr-sm-2" type="date" name="DT_LEMBRETE" id="DT_LEMBRETE"{...register("DT_LEMBRETE", { required: 'Insira uma data para seu lembrete.'})} onChange={onChangeInput} />
                    </Col>
                </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">Novo Lembrete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalForm;