import Menu from "../components/topmenu";
import Smallfooter from "../components/smallfooter";
import React from "react";
import Head from "next/head";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col,} from 'reactstrap';


function createQuestion() {
    return (
        <div>
            <Head>
                <title>
                    Banco de Provas - FIEB
                </title>
            </Head>
            <Menu/>

            <Container>
                <style>
                    {`
                    .form{
                        margin-top:15% !important;
                        margin-bottom:10% !important;
                    }`}
                </style>
            <Form className="form">
                <Row>
                <Col className="col-md-4">
                    <FormGroup>
                        <Input type="select" name="serie" id="serie">
                            <option>Selecione um ano</option>
                            <option>1ºAno</option>
                            <option>2ºAno</option>
                            <option>3ºAno</option>
                            
                        </Input>
                    </FormGroup>
                </Col>
                <Col className="col-md-4">
                    <FormGroup>
                        <Input type="select" name="trimestre" id="trimestre">
                            <option>Selecione um Trimestre</option>
                            <option>1° Trimestre</option>
                            <option>2° Trimestre</option>
                            <option>3° Trimestre</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col className="col-md-4">
                    <FormGroup>
                        <Input type="select" name="materia" id="materia">
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
                    <Input type="text" name="autor" id="autor" placeholder="Nome Autor:" />
                </FormGroup>

                <FormGroup>
                    <Label for="autor">Conteúdo:</Label>
                    <Input type="text" name="conteudo" id="conteudo" placeholder="Conteudo da Questão:" />
                </FormGroup>

                <FormGroup>
                    <Label for="descricao">Descrição:</Label>
                    <Input type="textarea" name="descricao" id="descricao" />
                </FormGroup>
                <Button type="submit" >Cadastrar Questão</Button>
            
            </Form>
            </Container>
           <Smallfooter/>
        </div>
    );
};

export default createQuestion