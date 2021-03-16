import React from 'react';

import { Container, Jumbotron, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #322153;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }`}
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
                        Somos uma pequena equipe de 4 devs, produzindo suas ideias.
                    </Col>

                    <Col className="col-md-4">
                        (+55)11 4002-8922
                    </Col>

                    <Col className="col-md-4">
                        <a href="https://fieb.edu.br/">FIEB</a>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <h7>© 2021 Copyright</h7>
            </Container>
        </Jumbotron>
    );
};


export default Footer; 