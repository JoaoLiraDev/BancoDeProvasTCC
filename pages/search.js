import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Menu from '../components/topmenu';
import Head from 'next/head';
import Router from 'next//router';
import FadeIn from 'react-fade-in';
import { parseCookies, setCookie } from 'nookies';
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    FormGroup,
    Input,
    Badge,
    Label
} from 'reactstrap';

function webSearch({ data_return }) {

    const [busca, setBusca] = useState({
        search:null
    })
    function searchSpace(event){
        let keyword = event.target.value;
        setBusca({search:keyword})
      }
    
    
    var myArr = []

    function addArr(num){
        if(myArr.includes(num) == true){
            var index = myArr.indexOf(num)
            if(index > -1){
                myArr.splice(index, 1)
                 
            }
        }else{
            myArr.push(num)
               
        }
        
    }

    
    function MakeTest(){
        if(myArr.length != 0){
     
            setCookie(null, 'id', myArr, {
                maxAge: 60 * 60 * 7,
                path: '/'
              });

            setTimeout(() => {
                Router.push('/createTest')
            }, 1000);
            
        }else{
            alert("Por favor selecione uma questão para montar a avaliação!")
        }        
    }

    const dados = data_return.Query_result;

    const questoes = dados.filter((Query_result)=>{
        if(busca.search == null)
            return Query_result
        else if(Query_result.AUTOR.toLowerCase().includes(busca.search.toLowerCase()) || Query_result.CONTEUDO.toLowerCase().includes(busca.search.toLowerCase())){
            return Query_result
        }
      }).map((Query_result) =>
        <div className="zoom" >
            <div id="titulo">
                <Row>
                    <Col className="col-md-2">
                        <label key={Query_result.SERIE} className="title">
                            Série: {Query_result.SERIE}
                        </label>
                    </Col>
                    <Col className="col-md-3">
                        <label key={Query_result.TRIMESTRE} className="title">
                            Trimestre: {Query_result.TRIMESTRE}
                        </label>
                    </Col>
                    <Col className="col-md-3">
                        <label key={Query_result.DISCIPLINA} className="title">
                            Disciplina: {Query_result.DISCIPLINA}
                        </label>
                    </Col>
                    <Col className="col-md-3">
                        <label key={Query_result.AUTOR} className="title">
                            Autor: {Query_result.AUTOR}
                        </label>
                        
                    </Col>
                    <Col className="col-md-1">
                        <input type="checkbox"  onClick={() => {addArr(Query_result.ID_QUEST)}} />
                    </Col>
                </Row>
                
            </div>
            <div className="bordinha">
                <Row>
                    <Col className="col-sm-12">
                        <br />
                        <h5 key={Query_result.CONTEUDO} className="disciplina">{Query_result.CONTEUDO}</h5>
                        <br />
                        <pre key={Query_result.DESCRICAO}>{Query_result.DESCRICAO}</pre>
                    </Col>
                </Row>
                   
            </div>
        
            <br />
        </div>
    );

    return (
        <div>
            <Head>
                <title>
                    MyQuestions
                </title>
                <link rel="icon" href="/icone_short.png"/>
            </Head>
            <FadeIn>
                <Menu />
                <style>
                    {`
                .zoom {
                transition: transform .2s;
                }

                .zoom:hover {
                transform: scale(1.05);
                }

                .bordinha{
                    border-bottom-style: solid;
                    border-left-style: solid;
                    border-right-style: solid;
                    border-color: rgba(233, 109, 100, 0.9);
                    border-radius: 0px 0px 10px 10px;
                }
                
                pre{
                    margin-left: 5px;
                }
                #titulo{
                    background-color: rgba(233, 109, 100, 0.9);
                    text-align: center;
                    border-radius: 10px 10px 0px 0px;
                }
                h5.disciplina{
                    text-align: center;
                }
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
                #badgeConteudo{
                    width: 100%;
                    height: 20px;
                    background-color: #000;
                    color: white;
                }
                label.title {
                    font-weight: bold;
                }
                hr{
                    border: 3px solid !important;
                    width: 100%;
                }
                `}
                </style>
                <Container className="main">
                <h6>Filtros:</h6>
                <br />
                <Row>

                    <Col className="col-md-1">
                        <FormGroup>
                            <Label for="CONTEUDO">Tipo de Conteúdo:</Label>
                        </FormGroup>
                    </Col>
                    <Col className="col-md-3">
                        <FormGroup>
                            <Input className="form-control mr-sm-2" type="text" name="CONTEUDO" id="CONTEUDO" onChange={(e) => searchSpace(e)} />
                        </FormGroup>
                    </Col>
                    
                    <Col className="col-md-1">
                        <FormGroup>
                            <Label for="AUTOR">Autor:</Label>
                        </FormGroup>
                    </Col>
                    <Col className="col-md-3">
                        <FormGroup>
                            <Input className="form-control mr-sm-2" type="text" name="AUTOR" id="AUTOR" onChange={(e) => searchSpace(e)} />
                        </FormGroup>
                    </Col>
                    <Col className="col-md-3">
                        <button type="button" className="btn btnAnimado" onClick={MakeTest} id="btnCriar" >Montar Prova</button>
                    </Col>
                </Row>
                <hr />
                <br />
                <br />
                    <Row>
                        <Col className="col-sm-12">
                            <Badge id="badgeConteudo">Conteúdo</Badge>
                        </Col>
                    </Row>
                    <br />
                    <div className="App">
                        {questoes}
                    </div>
                    <br />
                    <br />

                </Container>
              
            </FadeIn>
        </div>
    );
};


export default webSearch;

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