import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React, { useState } from 'react';
import Footer from '../components/footer';
import { Button, ButtonGroup, Jumbotron, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Fade, Toast, ToastBody, ToastHeader } from 'reactstrap';


function Config(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setModal(!modal);
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

      <div>
        <Jumbotron fluid className="descr-top">
          <Container className="text-center">
            <img src="profile.png" width="256px" height="256px" alt="img profile" />
            <h1 className="display-3">Profile</h1>
            <p className="lead">Username</p>
            <p className="lead">Email@example.com.br</p>
          </Container>
          <Container className="form_meio">
            <h4 className="display-4">Edit Profile</h4>
            <hr />
            <Form>
              <Row>
                <Col className="col-md-4">
                  <FormGroup controlId="formGroupEmail">
                    <Label>Email address</Label>
                    <Input type="email" placeholder="Enter email" />
                  </FormGroup>
                </Col>
                <Col className="col-md-4">
                  <FormGroup controlId="formGroupPassword">
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                  </FormGroup>
                </Col>
                <Col className="col-md-4">
                  <FormGroup controlId="formGroupPassword">
                    <Label>Confirm Password</Label>
                    <Input type="password" placeholder="Password" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <button className="btn btnAnimado">Submit</button>
                <button className="btn btnAnimado">Confirm Email</button>
              </Row>
            </Form>
          </Container>
          <br />
          <Container className="form_meio">
            <h3>More</h3>
            <hr />
            <Form>
              <p className="lead">Email@example.com.br</p>
              <Row>
                <FormGroup check>
                  <Label check className="ml-3">
                    <Input type="checkbox" /> Check me out
                  </Label>
                </FormGroup>
              </Row>
              <br />
              <p className="lead">Email@example.com.br</p>
              <Row>
                <FormGroup check>
                  <Label check className="ml-3">
                    <Input type="checkbox" /> Check me out
                  </Label>
                </FormGroup>
              </Row>
              <br />
              <Row>
                <button className="btn btnAnimado">Add Account</button>
                <Col className="col-sm-2">
                <Input type="button" className="btn btnAnimado" value="Delete Account" onClick={toggle}><{buttonLabel}></Input>
                </Col>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                  <ModalHeader toggle={toggle}>Delete Account</ModalHeader>
                  <ModalBody>
                    Are you sure you want to delete your account?
                    In a few days it will expire and you will no longer have access!
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>Yes, I'm sure!</Button>{' '}
                    <Button color="secondary" onClick={toggle}>No, wrong button...</Button>
                  </ModalFooter>
                </Modal>
              </Row>
            </Form>
          </Container>
        </Jumbotron>
      </div>
      <Footer />
    </div >
  );
};
export default Config;