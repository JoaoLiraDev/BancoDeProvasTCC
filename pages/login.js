import React, { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    FormGroup,
    Input,
    Form,
    Button,
    Row,
    Col,
    Label
} from 'reactstrap';



function Login(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Head>
                <title>
                    MyQuestions
                </title>
            </Head>

            <style>
                {`.menu-custom{
                    background-color:#000;
                }
                .imgLogin{
                    margin-top:100px;
                }.btn{
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 11px;
                    font-weight: bold;
                    color:#fff;
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
                  color:#fff !important;
                  background-color: #E96C64;
                  
                  z-index: -1;
                  
                  transition: 0.7s ease;
                }
                .btnAnimado{
                    color:#fff !important;
                    
                }.btnAnimado:before{
                  content:'';
                    width: 0;
                  height: 100%;
                  color:#fff !important;

                }.btnAnimado:hover:before{
                    width: 100%;
                    color:#fff !important;
                  
                }
                #btnLogin{
                    width: 100px;
                }
                #btnCadastrar{
                    width: 150px;
                }
                .divMain1{
                    display: inline;    
                    width:50%;
                    float:left;
                }
                .divMain2{
                    display: inline;
                    width:50%;
                    float:right;
                    margin-top:100px;
                }
                `}
            </style>

            <Navbar className="menu-custom" dark expand="md" fixed="top">
                <Container>
                    <NavbarBrand href="/">
                        <Image
                            src="/shortLogo.png"
                            alt="Picture of the author"
                            width={188}
                            height={55}
                        />
                    </NavbarBrand>


                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>

                    </Collapse>

                    <Nav>
                        <NavItem>
                            <Form inline>
                                <FormGroup>
                                    <Input className="form-control" type="text" placeholder="Username:" className="mr-sm-2" />
                                    <Input className="form-control" type="password" placeholder="Password:" className="mr-sm-2" />
                                    <button type="submit" className="btn btnAnimado" id="btnLogin" >Login</button>
                                </FormGroup>
                            </Form>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>


            <Container className="imgLogin">
                <div className="divMain1">
                    <Image src="/teaching.svg" alt="ImagemLogin" width={600} height={600} />
                </div>

                <div className="divMain2">
                    <Form className="form">
                        <FormGroup>
                            <Label for="autor">Nome Completo:</Label>
                            <Input type="text" name="nomeCadstro" id="nomeCadstro" placeholder="Nome Completo:" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="autor">E-mail:</Label>
                            <Input type="email" name="email" id="email" placeholder="E-mail:" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="autor">Senha:</Label>
                            <Input type="password" name="senha" id="senha" placeholder="Senha:" />
                        </FormGroup>


                        <Row>
                            <Col className="col-md-1"></Col>
                            <Col className="col-md-1"></Col>
                            <Col className="col-md-1"></Col>
                            <Col className="col-md-1"></Col>
                            <Col className="col-md-6 ">
                                <button type="submit" className="btn btnAnimado" id="btnCadastrar" >Cadastrar-se</button>
                            </Col>
                        </Row>
                    </Form>
                </div>


            </Container>
        </div>
    );

};
export default Login;