import React, { useState } from 'react';
import Image from 'next/image'
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

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <style>
                {`.menu-custom{
                    background-color:#000;
                }
                `}
            </style>
            <Navbar className="menu-custom" dark expand="md" fixed ="top">
                <Container>
                    <NavbarBrand href="/">
                        <Image
                            src="/shortLogo.png"
                            alt="Picture of the author"
                            width={188}
                            height={55}
                        />
                    </NavbarBrand>

                    <div className="sidebar-sticky"></div>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/search">Pesquisar</NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink href="/">Questões</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/createQuestions">Criar</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Download</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/pageConfig">Configurações</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                <Nav>
                    <NavItem>
                        <NavLink href="/login"><Image src="/logout.png" alt="Picture of the author" width={20} height={20} /></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Menu;