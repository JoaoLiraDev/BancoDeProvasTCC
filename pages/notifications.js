import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React, { useState } from 'react';
import Footer from '../components/footer';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Container, Jumbotron, Col, Row, CustomInput } from 'reactstrap';
import { parseCookies } from 'nookies'

const Config_notifications = (props) => {
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
              .calendar_meio{
                margin-left: 5rem !important; 
              }



              ul {list-style-type: none;}
              body {font-family: Verdana, sans-serif;}

              .month {
                padding: 25px 10px;
                width: 80%;
                height:100px;
                background: #E96C64;
                text-align: center;
                border-radius: 15px 15px 0 0;
              }

              .month ul {
                margin: 0;
                padding: 0;
              }

              .month ul li {
                color: white;
                font-size: 20px;
                text-transform: uppercase;
                letter-spacing: 3px;
              }

              .month .prev {
                float: left;
                padding-top: 10px;
                margin-left: 15px;
              }

              .month .next {
                float: right;
                padding-top: 10px;
                margin-right: 15px;
              }

              .weekdays {
                margin: 0;
                width: 80%;
                padding: 10px 0;
                background-color:#ddd;
              }

              .weekdays li {
                display: inline-block;
                width: 13.6%;
                color: #666;
                text-align: center;
              }

              .days {
                padding: 10px 0;
                width: 80%;
                background: #eee;
                margin: 0;
                border-radius: 0 0 15px 15px;
              }

              .days li {
                list-style-type: none;
                display: inline-block;
                width: 13.6%;
                text-align: center;
                margin-bottom: 35px;
                font-size:15px;
                color: #777;
              }

              .days li .active {
                padding: 7px;
                background: #E96C64;
                color: white !important
              }
            `}
      </style>
      <Jumbotron fluid className="descr-top">
        <h1 className="display-4 ml-4">Reminders</h1>
        <hr />
        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on the notifications" />
        <Container className="text-center">
          <div>
            <Row>
              <Col className="col-md-4">
                <Card>
                  <CardTitle tag="h5">Reminder</CardTitle>
                  <CardBody>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Hoje é putaria maxima</CardSubtitle>
                    <CardText>Ideia reminder pra   l e m b r a r   depois ha ha, piadas...</CardText>
                    <button className="btn btnAnimado">Ignorar</button><br />
                    <button className="btn btnAnimado">Lembrar de novo...</button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-md-4">
                <Card>
                  <CardTitle tag="h5">Reminder</CardTitle>
                  <CardBody>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Hoje é putaria maxima</CardSubtitle>
                    <CardText>Ideia reminder pra   l e m b r a r   depois ha ha, piadas...</CardText>
                    <button className="btn btnAnimado">Ignorar</button><br />
                    <button className="btn btnAnimado">Lembrar de novo...</button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-md-4">
                <Card>
                  <CardTitle tag="h5">Reminder</CardTitle>
                  <CardBody>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Hoje é putaria maxima</CardSubtitle>
                    <CardText>Ideia reminder pra   l e m b r a r   depois ha ha, piadas...</CardText>
                    <button className="btn btnAnimado">Ignorar</button><br />
                    <button className="btn btnAnimado">Lembrar de novo...</button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <br />

          <Container className="calendar_meio">
          <div class="month">
            <ul>
              <li class="prev">&#10094;</li>
              <li class="next">&#10095;</li>
              <li>August<br/><span>2021</span></li>
            </ul>
            </div>

            <ul class="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
            </ul>

            <ul class="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li><span class="active">18</span></li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            </ul>
          </Container>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default Config_notifications;

export async function getServerSideProps(ctx){
    
  const { MQtoken } = parseCookies(ctx)

  if(!MQtoken){
      return{
          redirect: {
              destination: '/login',
              permanent: false,
          }
      }
  }

  return{
     props: {} 
  }
}