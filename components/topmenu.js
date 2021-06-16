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
    Container, 
    ButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    UncontrolledDropdown,
    Badge
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
                .textcolor{
                    color:#000;
                    text-decoration: none !important;
                }
                .bkdrop DropdownItem:hover{
                    color:#c0c0c0;
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
                                <NavLink href="/questions">Questões</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/createQuestions">Criar</NavLink> 
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Configurações
                                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavItem>
                                                <a href="/profile" className="textcolor">Profile</a>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem>
                                                <a href="/saved" className="textcolor">Saved</a>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem>
                                                <a href="/notifications" className="textcolor">Notifications <Badge color="secondary">9</Badge></a>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem>
                                                <a href="/" className="textcolor">Download</a>
                                            </NavItem>
                                        </DropdownItem>
                                    </DropdownMenu>
                            </UncontrolledDropdown>
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