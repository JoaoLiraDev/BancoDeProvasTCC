import React, {useState} from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import Menu from "../components/topmenu";
import Smallfooter from "../components/smallfooter";
import Head from "next/head";
import { parseCookies, setCookie } from 'nookies';
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    FormGroup,
    Input,
    Badge,
    Label
} from 'reactstrap';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const buttonList = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
  

const MakeTest = props => {
    
    
    const teste = props.data_return.Query_result

    const conteudo = teste.map((Query_result) =>
    `<div>
        <pre>
            ${Query_result.DESCRICAO}
        </pre>
        <br />
    </div>`
    );
    
    return (
    <div>
        <Head>
            <title>
                MyQuestions
            </title>
        </Head>
        <Menu />
        <br/>
        <br/>
        <br/>
        <br/>
        
        <SunEditor 
        lang="pt_br" 
        width="100%" 
        height="100%"
        autoFocus={true}
        defaultValue={conteudo.join('')}
        setOptions={{  
            buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['paragraphStyle', 'blockquote'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['fontColor', 'hiliteColor', 'textStyle'],
                ['removeFormat'],
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'lineHeight'],
                ['table', 'link', 'image'], 
                ['fullScreen', 'showBlocks', 'codeView'],
                ['preview', 'print'],
                ['save']
            ]
    }}
            />
    </div>
  );
};
export default MakeTest;


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
    
    const { id } = parseCookies(ctx)

    const resp = await fetch(`http://localhost:8080/CreateQuest/questSelected/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MQtoken}` }
        }); 

        var data_return = await resp.json();

    return {
        props: { data_return }
    };
}