import { createContext, useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next//router';
import { api } from '../services/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }){

    const isAuthenticated = false;

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: '',
        token: ''
    });
    async function singIn(login){
        
        try {
            const res = await fetch('http://localhost:8080/Usuarios/login', {
              method: 'POST',
              body: JSON.stringify(login),
              headers: { 'Content-Type': 'application/json' }
            });
      
            const responseEnv = await res.json();
            
            if (responseEnv.mensagem == "Falha na autenticação"){
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.mensagem,
                    token: '-'
                  });
                  alert(responseEnv.mensagem)
                  Router.reload()    
            }else {
              setResponse({
                formSave: false,
                type: 'success',
                message: responseEnv.mensagem,
                token: responseEnv.token
              });
              setCookie(undefined, 'MQtoken', responseEnv.token, {
                maxAge: 60*60*5 //5_horas,
                });
                Router.push('/')
                api.defaults.headers['Authorization'] = `Bearer ${responseEnv.token}`;
            }
          } catch (err) {
            setResponse({
              formSave: false,
              type: 'error',
              message: "Erro: Falha ao realizar login!",
              token: '-'
            });
          }

    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}