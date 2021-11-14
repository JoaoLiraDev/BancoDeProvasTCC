import React from 'react';

import { Container, Jumbotron, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #000;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }
                `}
            </style>
            <Container className="text-center">

                <Row>
                    <Col className="col-md-4">
                        Sobre Nós
                    </Col>

                    <Col className="col-md-4">
                        Contatos
                    </Col>

                    <Col className="col-md-4">
                        Links
                    </Col>
                </Row>

                <Row>
                    <Col className="col-md-4">
                        Trabalho acadêmico de conclusão de curso.
                        Equipe MyQuestions.
                    </Col>

                    <Col className="col-md-4">
                        (+55)11 4003-7479
                    </Col>

                    <Col className="col-md-4">
                        <a href="https://fieb.edu.br/">FIEB</a><br />
                        <a href="mailto:auth.myquestions@gmail.com">E-mail</a><br />
                       
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <h7>© MyQuestions, since 2019</h7>
            </Container>
        </Jumbotron>
    );
};


export default Footer;