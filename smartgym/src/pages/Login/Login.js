import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Login.css"

function Login(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

      function login(){
        alert("Bem vindo!\n" + email);
        history.push("home");
      }
    return (
      <div className="base">
        <div className="container-login">
            <div class="login-title">
            LOGIN
            </div>
              <div className="linha1text">
              <div className="textEmail">Endereço de e-mail</div>
              </div>

              <div className="linha1">
                  <input className="inputEmail" type="Email" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              
              <div className="linha2text">
                <p className="textSenha">Senha</p>
              </div>

              <div className="linha2">
                <input className="inputSenha" type="password" onChange={(e)=>setPassword(e.target.value)} />
              </div>


            <button class="button" type="submit" onClick={(login)}>
              <div class="button-label">
                ENTRAR
              </div>
              </button>
        </div>
      </div>
    );
}

export default Login;