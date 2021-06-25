import Menu from '../components/topmenu';
import Carocel from '../components/carousel';
import Footer from '../components/footer';
import React, { useState } from 'react';
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
import { parseCookies } from 'nookies'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

function webQuestions({ data_return }) {

    const dados = data_return.Query_result;
    const questoes = dados.map((Query_result) =>
        <div>
            <div id="titulo">
                <Row>
                    <Col className="col-md-12">
                        <ul>
                            <li><b>Questão: {Query_result.ID_QUEST} -</b> {Query_result.DISCIPLINA} - {Query_result.CONTEUDO} | {Query_result.SERIE} | {Query_result.TRIMESTRE}</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );


    return (
        <div>
            <Head>
                <title>
                    MyQuestions
                </title>
            </Head>
            <FadeIn>
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
                <Container className="main">
                    {questoes}
                </Container>
            </FadeIn>
            <Footer />
        </div>
    );


}
export default webQuestions;

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

    const res = await fetch('http://localhost:8080/CreateQuest/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MQtoken}` }
    });
    const data_return = await res.json();

    return {
        props: { data_return }
    };
}