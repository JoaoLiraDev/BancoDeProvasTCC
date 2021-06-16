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
    Label,
    Alert
} from 'reactstrap';
import { useForm } from 'react-hook-form'



function Login() {

    const [login, setLogin] = useState({        
        email: "",
        senha: ""
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [response, setRespose] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const onChangeInput = e => setLogin({ ...login, [e.target.name]: e.target.value });
    
    const sendLogin = async e => {
        // e.preventDefault();
    
        setRespose({ formSave: true });
        
    
        try {
          const res = await fetch('http://localhost:8080/Usuarios/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const responseEnv = await res.json();
          
          if (responseEnv.error) {
            setRespose({
              formSave: false,
              type: 'error',
              message: responseEnv.mensagem,
              token: responseEnv.token
            });
          } else {
            setRespose({
              formSave: false,
              type: 'success',
              message: responseEnv.mensagem,
              token: responseEnv.token
            });
          }
        } catch (err) {
          setRespose({
            formSave: false,
            type: 'error',
            message: "Erro: Falha ao realizar login!"
          });
        }
    
      };
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
                .alert-hidden {
                    opacity: 0;
                    transition: all 250ms linear 2s;
                  }
                `}
            </style>

            <Navbar className="menu-custom" dark expand="md" fixed="top">
                <Container>
                    <NavbarBrand href="/login">
                        <Image
                            src="/shortLogo.png"
                            alt="Picture of the author"
                            width={188}
                            height={55}
                        />
                    </NavbarBrand>


                    <NavbarToggler />
                    <Collapse navbar>

                    </Collapse>

                    <Nav>
                        <NavItem>
                            <Form inline onSubmit={handleSubmit(sendLogin)} noValidate>
                                <FormGroup>
                                    <Input className="form-control mr-sm-2" type="text" name="email" id="email"{...register("email", {required: 'Enter your e-mail',pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i , message: 'Enter a valid e-mail address',}})} placeholder="Email:"  onChange={onChangeInput}/>
                                    <Input className="form-control mr-sm-2" type="password" name="senha" id="senha" placeholder="Password:"  onChange={onChangeInput}/>
                                    <button type="submit" className="btn btnAnimado" id="btnLogin" >Login</button>
                                </FormGroup>
                            </Form>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>


            <Container className="imgLogin">
                    {/* {...setTimeout(() => {{ errors.email && <Alert color="danger">{errors.email.message}</Alert>}}, 2500)} */}
                    {errors.email && <Alert color="danger">{errors.email.message}</Alert>}
             
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