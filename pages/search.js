import Menu from '../components/topmenu';
import Carocel from '../components/carousel';
import Footer from '../components/footer';
import React,{useState} from 'react';
import Head from 'next/head';

import { Jumbotron, Button, Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

function webSearch() {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

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
                    margin-top:100px !important;
                }
                .button{
                    padding: 30px;
                    margin-left: 10px;
                }
                `}
            </style>
            <Container className="main">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <Button id="caret" class="button">Série</Button>
                <DropdownToggle split />
                <DropdownMenu>
                    <DropdownItem>1º ano</DropdownItem>
                    <DropdownItem>2º ano</DropdownItem>
                    <DropdownItem>3º ano</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <Button id="caret" class="button">Trimestre</Button>
                <DropdownToggle split />
                <DropdownMenu>
                    <DropdownItem>1º trimestre</DropdownItem>
                    <DropdownItem>2º trimestre</DropdownItem>
                    <DropdownItem>3º trimestre</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <Button id="caret" class="button">Matéria</Button>
                <DropdownToggle split />
                <DropdownMenu>
                    <DropdownItem header>Núcleo Normal</DropdownItem>
                    <DropdownItem>Português</DropdownItem>
                    <DropdownItem>Matemática</DropdownItem>
                    <DropdownItem>Geografia</DropdownItem>
                    <DropdownItem>...</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>       
            </Container>

        </div>
    );
};

export default webSearch