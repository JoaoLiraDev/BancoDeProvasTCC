import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React, { useState } from 'react';
import Footer from '../components/footer';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Container, Jumbotron, Col, Row, CustomInput } from 'reactstrap';


const Config = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  return (
    <div>
      <Menu />
      <style>
        {`
              .main{
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
      <Jumbotron fluid className="descr-top">
        <h1 className="display-3 ml-4">Amodeio vocês meus lindos</h1>
        <hr />
        <Container className="text-center">
          <div>
            <Row>
            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on the notifications" />
              <Col className="col-md-5">
                <Card>
                  <CardTitle tag="h5">Nicolly ta triste</CardTitle>
                  <CardBody>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Realmente muito triste</CardSubtitle>
                    <CardText>Lira e Marcelo dois homens cabaços estão maltratando ela em tempo integral.</CardText>
                    <button className="btn btnAnimado">Consola-la?</button>
                    <button className="btn btnAnimado">Tacar vazinho nela</button>
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

export default Config;