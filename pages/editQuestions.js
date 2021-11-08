import Menu from "../components/topmenu";
import Smallfooter from "../components/smallfooter";
import React, { useState } from "react";
import Head from "next/head";
import { Form, FormGroup, Label, Input, Container, Row, Col, Button, Alert } from 'reactstrap';
import { data, readyException } from "jquery";
import { useForm } from 'react-hook-form'
import { parseCookies, setCookie } from 'nookies'
import Router from 'next//router';


function editQuestion({ questEdit }) {

    const { 'MQtoken': token } = parseCookies();

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const [quest, setQuest] = useState({
        ano: questEdit.SERIE,
        trimestre: questEdit.TRIMESTRE,
        materia: questEdit.DISCIPLINA,
        autor: questEdit.AUTOR,
        conteudo: questEdit.CONTEUDO,
        descricao: questEdit.DESCRICAO,
        id: questEdit.ID_QUEST
    });

    const onChangeInput = e => setQuest({ ...quest, [e.target.name]: e.target.value });
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function sendQuest(id_quest) {

        setResponse({ formSave: true });
        console.log(id_quest)
        try {
            const res = await fetch(`http://localhost:8080/CreateQuest/atualiza/${id_quest}`, {
                method: 'PATCH',
                body: JSON.stringify(quest),
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            });

            const responseEnv = await res.json();
            console.log(responseEnv)

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
                    setResponse({
                        formSave: false,
                        type: '',
                        message: ''
                    });
                    Router.push('/questions')
                }, 2000);
            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: "Erro: Falha ao atualizar questão!"
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
            <Menu />

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


                <Form className="form" onSubmit={sendQuest} noValidate>
                    
                    {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                    {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

                    <Row>
                        <Col className="col-md-4">
                            <FormGroup>
                            <Input type="select" name="ano"  value={quest.ano} id="ano" onChange={onChangeInput}>
                                    <option>Selecione um ano</option>
                                    <option>1ºAno</option>
                                    <option>2ºAno</option>
                                    <option>3ºAno</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="col-md-4">
                            <FormGroup>
                            <Input type="select" name="trimestre" id="trimestre" value={quest.trimestre}  onChange={onChangeInput}>
                                    <option>Selecione um Trimestre</option>
                                    <option>1° Trimestre</option>
                                    <option>2° Trimestre</option>
                                    <option>3° Trimestre</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="col-md-4">
                            <FormGroup>
                            <Input type="select" name="materia" id="materia" value={quest.materia}  onChange={onChangeInput}>
      
                                    <option>Selecione uma Materia</option>
                                    <option>Lingua Portuguesa e Literatura</option>
                                    <option>Matemática</option>
                                    <option>História</option>
                                    <option>Geografia</option>
                                    <option>Física</option>
                                    <option>Quimíca</option>
                                    <option>Biologia</option>
                                    <option>Filosofia</option>
                                    <option>Sociologia</option>
                                    <option>Inglês Técnico</option>
                                    <option>Educação Física</option>
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
                        <Input type="text" name="autor" id="autor" value={quest.autor} placeholder="Nome Autor:"  onChange={onChangeInput} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="conteudo">Conteúdo:</Label>
                        <Input type="text" name="conteudo" id="conteudo" value={quest.conteudo} placeholder="Conteúdo da Questão:" onChange={onChangeInput} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="descricao">Descrição:</Label>
                        <Input type="textarea" name="descricao" id="descricao" value={quest.descricao} placeholder="Escreva a questão aqui..."  onChange={onChangeInput} />
                    </FormGroup>
                    <Row>
                        <Col className="col-md-4 ">
                            {response.formSave ? <button type="button" className="btn btnAnimado" id="btnCriar" >Enviando...</button> : <button type="button" onClick={() => sendQuest(quest.id)} className="btn btnAnimado" id="btnCriar" >Salvar</button>}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default editQuestion;

export async function getServerSideProps(ctx) {

    const { MQtoken } = parseCookies(ctx)

    if (!MQtoken) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }


    const { Quest } = parseCookies(ctx);
    var questEdit = JSON.parse(Quest)

    return {
        props: { questEdit }
    };
}