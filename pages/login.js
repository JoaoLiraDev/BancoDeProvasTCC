import React, { useContext, useState } from 'react';
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
import { AuthContext } from '../contexts/AuthContext';



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

    const { singIn } = useContext(AuthContext)
    async function sendLogin(login) {
        await singIn(login)
    }

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
                }
                .btn{
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 11px;
                    font-weight: bold;
                    margin: 0 15px 0 140px;
                    padding: 10px 15px;
                    overflow: hidden;
                    border: 2px solid #E96C64;
                    position: relative;
                    color: #000 !important;
                    
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
                  color:#000 !important;

                }.btnAnimado:hover:before{
                    width: 100%;
                    color:#000 !important;
                }
                #btnLogin{
                    width: 100px;
                    color: #000 !important;
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
                    padding-left: 145px;
                }
                .alert-hidden {
                    opacity: 0;
                    transition: all 250ms linear 2s;
                  }
                  .top{
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .separator{
                    font-size: 14px;
                    color: #a8a8b3;
                    margin: 32px 0;
                    display: flex;
                    align-items: center;
                  }
                  .separator:before{
                      content: '';
                      flex: 1;
                      height: 1px;
                      background: #a8a8b3;
                      margin-right: 16px;
                    }
                    .separator:after{
                      content: '';
                      flex: 1;
                      height: 1px;
                      background: #a8a8b3;
                      margin-left: 16px;
                    }
                
                `}
            </style>


            <Navbar className="menu-custom" dark expand="md" fixed="top">
                <Container className="top">

                    <Image
                        src="/shortLogo.png"
                        alt="Picture of the author"
                        width={188}
                        height={55}

                    />

                </Container>
            </Navbar>


            <Container className="imgLogin">
                {errors.email && <Alert color="danger">{errors.email.message}</Alert>}
                {errors.senha && <Alert color="danger">{errors.senha.message}</Alert>}

                <div className="divMain1">
                    <Image src="/teaching.svg" alt="ImagemLogin" width={600} height={600} />
                </div>

                <div className="divMain2">
                    <Form onSubmit={handleSubmit(sendLogin)} noValidate>
                        <Row>
                            <Col className="col-md-10">
                                <Label for="email">Email:</Label>
                                <Input className="form-control mr-sm-2" type="text" name="email" id="email"{...register("email", { required: 'Enter your e-mail', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter a valid e-mail address', } })} placeholder="Email:" onChange={onChangeInput} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-10">
                                <Label for="senha">Password:</Label>
                                <Input className="form-control mr-sm-2" type="password" name="senha" id="senha" {...register("senha", { required: 'Enter your password' })} placeholder="Password:" onChange={onChangeInput} />
                            </Col>
                        </Row>
                        <br />
                        <button type="submit" className="btn btnAnimado" id="btnLogin" >Login</button>
                        <div className="separator">ou faça seu cadastro agora.</div>
                    </Form>
                    {/*                     
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
                    </Form> */}
                </div>


            </Container>
        </div>
    );

};
export default Login;
