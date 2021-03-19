import Menu from '../components/topmenu';
import Carocel from '../components/carousel';
import Footer from '../components/footer';
import React from 'react';
import Head from 'next/head';

import { Jumbotron, Button, Container } from 'reactstrap';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

function HomePage() {
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
                    margin:0 !important;
                }
                `}
            </style>

            <Jumbotron className="main">
                
                <Carocel />

                <p>
                    Lorem ipsum nullam tristique adipiscing donec mollis inceptos in dictumst,
                    lacinia inceptos cursus tempor vulputate tincidunt quisque.
                    curabitur aliquet dictum ut suscipit at mattis sagittis, urna ultrices pellentesque
                    hendrerit purus dictum, libero quisque elit elementum cursus nulla. cursus quisque
                    cras posuere aenean ut id mattis convallis quisque amet.
                </p>

                <p>
                    Lorem ipsum nullam tristique adipiscing donec mollis inceptos in dictumst,
                    lacinia inceptos cursus tempor vulputate tincidunt quisque.
                    curabitur aliquet dictum ut suscipit at mattis sagittis, urna ultrices pellentesque
                    hendrerit purus dictum, libero quisque elit elementum cursus nulla. cursus quisque
                    cras posuere aenean ut id mattis convallis quisque amet.
                </p>
                <p>
                    Lorem ipsum nullam tristique adipiscing donec mollis inceptos in dictumst,
                    lacinia inceptos cursus tempor vulputate tincidunt quisque.
                    curabitur aliquet dictum ut suscipit at mattis sagittis, urna ultrices pellentesque
                    hendrerit purus dictum, libero quisque elit elementum cursus nulla. cursus quisque
                    cras posuere aenean ut id mattis convallis quisque amet.
                </p>
                <p>
                    Lorem ipsum nullam tristique adipiscing donec mollis inceptos in dictumst,
                    lacinia inceptos cursus tempor vulputate tincidunt quisque.
                    curabitur aliquet dictum ut suscipit at mattis sagittis, urna ultrices pellentesque
                    hendrerit purus dictum, libero quisque elit elementum cursus nulla. cursus quisque
                    cras posuere aenean ut id mattis convallis quisque amet.
                </p>
                <p>
                    Lorem ipsum nullam tristique adipiscing donec mollis inceptos in dictumst,
                    lacinia inceptos cursus tempor vulputate tincidunt quisque.
                    curabitur aliquet dictum ut suscipit at mattis sagittis, urna ultrices pellentesque
                    hendrerit purus dictum, libero quisque elit elementum cursus nulla. cursus quisque
                    cras posuere aenean ut id mattis convallis quisque amet.
                </p>
            </Jumbotron>

            <Footer />
        </div>
    );
};

export default HomePage