import React, { useState } from 'react';
import Image from 'next/image'
import Router from 'next//router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Badge
} from 'reactstrap';
import { destroyCookie } from 'nookies';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function Logout() {
        destroyCookie({}, 'MQtoken')
        Router.push('/login')
    }

    return (
        <div>
            <style>
                {`.menu-custom{
                    background-color:#000;
                }
                .textcolor{
                    color:#000;
                    text-decoration: none !important;
                }
                .bkdrop DropdownItem:hover{
                    color:#c0c0c0;
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

                    <div className="sidebar-sticky"></div>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/search">Pesquisar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/questions">Minhas Questões</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/createQuestions">Criação</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/notifications" className="textcolor">Lembretes </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem> 
                                <NavLink href="/profile"><Image src="/settings.png" alt="Picture of the author" width={25} height={25} /></NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink onClick={Logout}><Image src="/logout.png" alt="Picture of the author" width={20} height={20} /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
        </div>
    );
}

export default Menu;