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
    NavLink,
    Container
} from 'reactstrap';



function Login(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Head>
                <title>
                    Banco de Provas - FIEB
                </title>
            </Head>

            <style>
                {`.menu-custom{
                    background-color:#322153;
                }
                `}
            </style>
            <Navbar className="menu-custom" dark expand="md" fixed ="top">
                <Container>
                    <NavbarBrand href="/">
                        <Image
                            src="/logo-fieb.png"
                            alt="Picture of the author"
                            width={164}
                            height={58}
                        />
                    </NavbarBrand>

                    <div className="sidebar-sticky"></div>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        
                    </Collapse>
                </Container>
                <Nav>
                    <NavItem>

                    </NavItem>
                </Nav>
            </Navbar>

            <img src="/teaching.svg"></img>
        </div>
    );

};
export default Login;