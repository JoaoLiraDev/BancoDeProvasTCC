import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Footer from '../components/footer';
import { parseCookies } from 'nookies'
import {
	Button, ButtonGroup, Jumbotron, Form, FormGroup, Label, Input, Modal, ModalHeader,
	ModalBody, ModalFooter, Container, Row, Col, Toast, ToastBody, ToastHeader, Media, Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap';
import Head from 'next/head';

function Config_profile(props) {

	const { user } = useContext(AuthContext);

	const { buttonLabel, className } = props;
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

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
              .card_top{
                margin-top: 7rem !important;
                margin-left: 3rem !important;
              }
              hr{
                border-top: 3px solid black;
              }
			  .divMain1{
				display: inline;    
				width: 50%;
				float: left;
			}
			.divMain2{
				display: inline;
				width: 50%;
				float: right;
				margin-top: 50px;
				padding-left: 145px;
			}
            `}
			</style>

			<div>
				<Jumbotron fluid className="descr-top">
					<Container>
						<h1>Meu perfil</h1>
						<hr />
						<Row>
							<Col sm={{ size: 'auto' }}>
								<img src="ProfilePage.svg" width="556px" height="556px" alt="img profile" id="imgpos" />
							</Col>
							<Col sm={{ size: 'auto', offset: 2 }}>
								<Card>
									<CardImg top width="200px" height="200px" src="iconFemale.jpeg" alt="Card image cap" />
									<CardBody>
										<CardTitle tag="h5">{user.username}</CardTitle>
										<CardSubtitle tag="h6" className="mb-2 text-muted">{user.email}</CardSubtitle>
									</CardBody>
								</Card>
							</Col>
						</Row>
						<br />
						<h2>Editar</h2>
						<hr />
						<Form>
							<div className="divMain1">
								<Row>
									<Col className="col-md-8">
										<FormGroup controlId="formGroupEmail">
											<Label>Endereço de E-mail</Label>
											<Input type="email" placeholder="Email" defaultValue={user.email} />
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col className="col-md-8">
										<FormGroup controlId="formGroupPassword">
											<Label>Senha</Label>
											<Input type="password" placeholder="Senha" />
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col className="col-md-8">
										<FormGroup controlId="formGroupPassword">
											<Label>Confirme a Senha</Label>
											<Input type="password" placeholder="Confirme a Senha" />
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<button className="btn btnAnimado">Salvar</button>
									<button className="btn btnAnimado">Confirmar E-mail</button>
								</Row>
							</div>
			  				<div className="divMain2">
								<img src="Personal_settings.svg" width="456px" height="456px" alt="img profile" />
							</div>
							
						</Form>
					</Container>
				</Jumbotron>
			</div>
		</div >
	);
};
export default Config_profile;


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

	return {
		props: {}
	}
}