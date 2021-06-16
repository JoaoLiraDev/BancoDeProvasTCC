import Menu from "../components/topmenu";
import Smallfooter from "../components/smallfooter";
import React, { useState } from "react";
import Head from "next/head";
import { Form, FormGroup, Label, Input, Container, Row, Col, Button, Alert} from 'reactstrap';
import { data, readyException } from "jquery";
import { useForm } from 'react-hook-form'



function createQuestion() {

    

    const [quest, setQuest] = useState({
        ano: '',
        trimestre: '',
        materia: '',
        autor: '',
        conteudo: '',
        descricao: ''
    });

    const [response, setRespose] = useState({
        formSave: false,
        type: '',
        message: ''
    });
   
    const onChangeInput = e => setQuest({ ...quest, [e.target.name]: e.target.value });
    
    const { register, handleSubmit, errors } = useForm();

    const sendQuest = async e => {
       
    
        setRespose({ formSave: true });
    
        try {
          const res = await fetch('http://localhost:8080/CreateQuest/cadastroQuest', {
            method: 'POST',
            body: JSON.stringify(quest),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const responseEnv = await res.json();
          

          if (responseEnv.error) {
            setRespose({
              formSave: false,
              type: 'error',
              message: responseEnv.mensagem
            });
          } else {
            setRespose({
              formSave: false,
              type: 'success',
              message: responseEnv.mensagem
            });
          }
        } catch (err) {
          setRespose({
            formSave: false,
            type: 'error',
            message: "Erro: Falha ao cadastrar questão!"
          });
        }
    
        
      };
      
    
    return (
        <div>
            <Head>
                <title>
                    MyQuestions 
                </title>
            </Head>
            <Menu/>
            
            <Container>
                <style>
                    {`
                    .form{
                        margin-top:15% !important;
                        margin-bottom:10% !important;
                    }
                    #descricao{
                        height:200px; 
                    }
                    .btn{
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 11px;
                        font-weight: bold;
                        margin: 0 15px;
                        padding: 10px 15px;
                        overflow: hidden;
                        border: 2px solid #E96C64;
                        position: relative;
                        
                    }
                    .btn:before{
                      content: '';
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      width: 100%;
                      height: 100%;
                      color:#E96C64 ;
                      background-color: #E96C64;
                      
                      z-index: -1;
                      
                      transition: 0.7s ease;
                    }
                    .btnAnimado{
                        
                        
                    }.btnAnimado:before{
                      content:'';
                        width: 0;
                      height: 100%;
                      color:#fff ;

                    }.btnAnimado:hover:before{
                        width: 100%;
                        color:#fff ;
                    }
                    `}
                </style>

            
            <Form className="form" onSubmit={handleSubmit(sendQuest)} noValidate>

            {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
            {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

                <Row>
                <Col className="col-md-4">
                    <FormGroup>
                        <Input type="select" name="ano" id="ano" onChange={onChangeInput}>
                            <option>Selecione um ano</option>
                            <option>1ºAno</option>
                            <option>2ºAno</option>
                            <option>3ºAno</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col className="col-md-4">
                    <FormGroup>
                        <Input type="select" name="trimestre" id="trimestre" onChange={onChangeInput}>
                            <option>Selecione um Trimestre</option>
                            <option>1° Trimestre</option>
                            <option>2° Trimestre</option>
                            <option>3° Trimestre</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col className="col-md-4">
                    <FormGroup>
                        <Input type="select" name="materia" id="materia" onChange={onChangeInput}>
                            <option>Selecione uma Materia</option>
                            <option>Lingua Portuguesa e Literatura</option>
                            <option>Matematica</option>
                            <option>História</option>
                            <option>Geografia</option>
                            <option>Fisica</option>
                            <option>Quimíca</option>
                            <option>Biologia</option>
                            <option>Filosofia</option>
                            <option>Sociologia</option>
                            <option>Inglês Técnico</option>
                            <option>Educação Fisica</option>
                            <option>Banco de Dados</option>
                            <option>Linguagem de Programação</option>
                            <option>Programação de Aplicativos</option>
                            <option>Projetos de T.I</option>
                            <option>METC</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
                <FormGroup>
                    <Label for="autor">Autor:</Label>
                    <Input type="text" name="autor" id="autor" placeholder="Nome Autor:" onChange={onChangeInput}/>
                </FormGroup>

                <FormGroup>
                    <Label for="autor">Conteúdo:</Label>
                    <Input type="text" name="conteudo" id="conteudo" placeholder="Conteudo da Questão:"   onChange={onChangeInput}/>
                </FormGroup>

                <FormGroup>
                    <Label for="descricao">Descrição:</Label>
                    <Input type="textarea" name="descricao" id="descricao" {...register('descricao', {required: 'Enter your description'})} onChange={onChangeInput} />
                    {errors && <p className="error">{errors.descricao.message}</p>}
                </FormGroup>
                <Row>
                    <Col className="col-md-4 ">
                        
                        {response.formSave ? <Button type="submit" outline color="danger" disabled>Enviando...</Button>: <Button type="submit" outline color="danger">Cadastrar Questão</Button>}
                    </Col>
                </Row>
            </Form>
            </Container>
           <Smallfooter/>
        </div>
    );
};

export async function getServerSideProps(context){

    const response = await fetch(`http://localhost:8080/CreateQuest/all`)
    const data = await response.json()

    return { props: { data } };
};

export default createQuestion