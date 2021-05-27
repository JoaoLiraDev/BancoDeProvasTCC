import Menu from '../components/topmenu';
import Carocel from '../components/carousel';
import Footer from '../components/footer';
import React from 'react';
import Head from 'next/head';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Container, Jumbotron, Col, Row } from 'reactstrap';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

function HomePage() {
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
                    margin:0 !important;
                }
                .mainJ{
                    margin-top:100px;
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
                    z-index: 2; 
                    
                    
                }
                .btn:before{
                  content: '';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 100%;
                  height: 100%;
                  background-color: #E96C64;
                  z-index: -1;     
                  transition: 0.7s ease;
                }
                .btnAnimado{
                    color:#E96C64 ;
                    
                }.btnAnimado:before{
                  content:'';
                  width: 0;
                  height: 100%;
                  color:#fff !important;
                }.btnAnimado:hover:before{
                    width: 100%;
                    color:#fff !important;
                  
                }
                  #imgpos {
                  position: absolute;
                  left: 60%;
                  top: 15%
                  } 
                  .text{
                  text-decoration: none;
                  text-transform: uppercase;
                  font-size: 11px;
                  font-weight: bold;
                  left: 60%;
                  top: 15%
                  }
                  .descr-top{
                    background-color: #fff;
                    margin-top: 2rem !important;
                  }
                  .form_meio{
                    margin-left:25rem !important; 
                  }
                `}
            </style>

            <Jumbotron className="descr-top">
                <h1 className="display-4 ml-4">Welcome to My Questions!</h1>
                <hr />
                <Carocel />
                <br />
                <h1 className="display-5 ml-4 text-center">Categories</h1>
                <br />
                <Container className="text-center">
                    <div>
                        <Row>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Humanas</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Matemática</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Biologia</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Inglês</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Filosofia</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Educação Fícica</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Sociologia</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Física</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-md-4">
                                <Card>
                                    <CardTitle tag="h5">Química</CardTitle>
                                    <CardBody>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <button className="btn btnAnimado">Check out</button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Jumbotron>

            <Footer />
        </div>
    );
};

export default HomePage;