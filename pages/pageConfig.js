import Menu from '../components/topmenu';
import Smallfooter from '../components/smallfooter';
import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


function Config(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Menu />
        <Container className="main">
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
                color:#E96C64 !important;
                margin: 0 15px;
                padding: 10px 15px;
                overflow: hidden;
                border: 2px solid #E96C64;
                position: relative;
                
            }
            .btn:before{
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              color:#E96C64!important;
              background-color: #E96C64;
              
              z-index: -1;
              
              transition: 0.7s ease;
            }
            .btnAnimado{
                color:#fff !important;
                
            }.btnAnimado:before{
              content:'';
                width: 0;
              height: 100%;
              color:#fff !important;

            }.btnAnimado:hover:before{
                width: 110%;
                color:#fff !important;
            }
              #imgpos {
              position: absolute;
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
            `}
          </style>

          <div>
            <img src="profile.png" width="256px" height="256px" alt="logo do site Maujor" id="imgpos" />
                    <h1 className="text">Profile</h1>
                <button type="submit" className="btn btnAnimado">Edit</button>
                <button type="submit" className="btn btnAnimado">Switch accounts</button>
                <button type="submit" className="btn btnAnimado">Delete account</button>
          </div>
        </Container>
    </div>
  );

};

export default Config;