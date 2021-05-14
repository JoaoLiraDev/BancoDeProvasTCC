import Menu from '../components/topmenu';
import Carocel from '../components/carousel';
import Footer from '../components/footer';
import React,{useState} from 'react';
import Head from 'next/head';
import FadeIn from 'react-fade-in';

import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    FormGroup,
    Input,
    Collapse,
    CardBody,
    Card,
    Table
} from 'reactstrap';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

function webSearch() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);{

        return (
            <div>
                <Head>
                    <title>
                        MyQuestions
                    </title>
                </Head>

                <Menu />
                <style>
                    {`
                    .main{
                        margin-top:100px !important;
                    }
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
                    #btnPesquisar{
                        float: right;
                    }
                #myTable{
                        margin-top: 20px;
                    }
                    `}
                </style>
                <FadeIn>
                    <Container className="main">
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
                    <Row>
                        <Col className="col-md-12 ">
                            <button type="submit" className="btn btnAnimado" id="btnPesquisar" onClick={toggle} >Pesquisar</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-12">
                            <Table id="myTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Professor</th>
                                        <th>Matéria</th>
                                        <th>Trimestre</th>
                                        <th>Ano</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>João Lira</td>
                                        <td>Python</td>
                                        <td>3º Trimestre</td>
                                        <td>3º Ano</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Marcelo Almeida</td>
                                        <td>JavaScript</td>
                                        <td>2º Trimestre</td>
                                        <td>1º Ano</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Nicollety</td>
                                        <td>React Native</td>
                                        <td>1º Trimestre</td>
                                        <td>2º Ano</td>
                                    </tr>
                                </tbody>    
                            </Table>
                        </Col>
                    </Row>
                    </Container>
                </FadeIn>
            </div>

    );

    }

};

export default webSearch;