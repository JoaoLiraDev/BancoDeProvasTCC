import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React, { useState } from 'react';
import Footer from '../components/footer';
import { Button, 
         ButtonGroup, 
         Jumbotron, 
         Form, 
         FormGroup, 
         Label, 
         Input, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter, 
         Container, 
         Row,
         Col, 
         Toast, 
         ToastBody, 
         ToastHeader,
         Media,
        Card } from 'reactstrap';


function Config(props) {

  const {buttonLabel,className} = props;
  const [modal, setModal] = useState(false);
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
              #profile{
                border-radius: 50% !important;
                margin-right: 1rem !important;
              }
            `}
      </style>

      <div>
        <Jumbotron fluid className="descr-top">
          <Container className="text-center">
            <img src="profile.png"   width="256px" height="256px" alt="img profile" />
            <h1 className="display-3">Profile</h1>
            <p className="lead">Username</p>
            <p className="lead">Email@example.com.br</p>
          </Container>
          <Container className="form_meio">
            <h4 className="display-4">Edit Profile</h4>
            <hr />
            <Form>
              <Row>
                <Col className="col-md-6">
                  <FormGroup controlId="formGroupEmail">
                    <Label>Email address</Label>
                    <Input type="email" placeholder="Enter email" />
                  </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col className="col-md-6">
                  <FormGroup controlId="formGroupPassword">
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                  </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col className="col-md-6">
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
              <Row>
              <Col sm="4">
              <Card body>
                <Media>
                  <Media left top href="#">
                  <img
                    src="/iconMale.jpeg"
                    alt="Profile pic"
                    width={64}
                    height={64}
                    id="profile"
                  />
                  </Media>
                  <Media body>
                  <Media heading>
                    Username
                  </Media>
                    Email@example.com.br
                  </Media>
                </Media>
                <FormGroup check>
                  <Label check className="ml-3">
                    <Input type="checkbox" /> Check me out
                  </Label>
                </FormGroup>
              </Card>
              </Col>
              </Row>
              <br />
              <Row>
              <Col sm="4">
              <Card body>
                <Media>
                  <Media left top href="#">
                  <img
                    src="/iconFemale.jpeg"
                    alt="Profile pic"
                    width={64}
                    height={64}
                    id="profile"
                  />
                  </Media>
                  <Media body>
                  <Media heading>
                    Username
                  </Media>
                    Email@example.com.br
                  </Media>
                </Media>
                <FormGroup check>
                  <Label check className="ml-3">
                    <Input type="checkbox" /> Check me out
                  </Label>
                </FormGroup>
              </Card>
              </Col>
              </Row>
              <br />
              <Row>
                <button className="btn btnAnimado">Add Account</button>
                <button className="btn btnAnimado" onClick={toggle}>Delete Account</button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                  <ModalHeader toggle={toggle}>Delete Account</ModalHeader>
                  <ModalBody>
                  Are you sure you want to delete your account?
                  In a few days it will expire and you will no longer have access!
                  </ModalBody>
                  <ModalFooter>
                    <button className="btn" onClick={toggle}>Yes, I'm sure!</button>{' '}
                    <button className="btn" onClick={toggle}>No, wrong button...</button>
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