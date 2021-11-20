import React, { useState } from 'react';
import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import Footer from '../components/footer';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Container, Jumbotron, Col, Row, CustomInput } from 'reactstrap';
import { parseCookies } from 'nookies';
import Calendar from 'react-calendar';
import Head from 'next/head';
import ModalForm from '../components/ModalAddLembrete'

function Config_notifications (props){

  const [date, setDate] = useState(new Date());
  
  const dados = props.data_return.Lembrete
  const lembretesCard = dados.map((Lembrete) => 
  <Col className="col-md-4" key={Lembrete.ID_LEMBRETE}>
    <Card body className="text-center">
      <CardTitle tag="h5">Lembrete</CardTitle>
      <CardBody>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Dia {Lembrete.dataLembrete}</CardSubtitle>
        <CardText>{Lembrete.TITULO_LEMBRTE}</CardText>
        <br />
        <button className="btn btnAnimado">Ignorar</button>
      </CardBody>
    </Card>
    <br/>
  </Col>
  )
  return (
    <div>
      <Head>
          <title>
              MyQuestions
          </title>
          <link rel="icon" href="/icone_short.png"/>
      </Head>
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
              .calendar_meio{
                margin-left: 10rem !important; 
              }
              .reminder{
                margin-left: 40rem !important;
              }

              ul {list-style-type: none;}
              body {font-family: Verdana, sans-serif;}

              .calendar {
                border-radius: 5px 5px 5px 5px;
              }
              .display{
                display: flex !important;
              }
              hr{
                border-top: 3px solid black;
              }
              .form_meio{
                margin-left:25rem !important; 
              }
            `}
      </style>
      <div>
        <Jumbotron fluid className="descr-top">
        <Container>
            <Row>
              <Col>
                <h1>Lembretes</h1>
              </Col>
              <Col className="offset-8">
                <ModalForm/>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col-md-4 offset-4">
                <Calendar className="calendar"
                onChange={setDate}
                value={date} />
              </Col>
            </Row>
            
          </Container>
          <br/>
          <Container>
          <hr />
            <Row>
              {lembretesCard}
            </Row>
            
          </Container>
        </Jumbotron>
      </div >
     
    </div >
  );
};

export default Config_notifications;

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
  const res = await fetch('http://localhost:8080/CreateQuest/lembretes', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MQtoken}` }
});

  const data_return = await res.json();
  
  return {
    props: { data_return }
  }
}