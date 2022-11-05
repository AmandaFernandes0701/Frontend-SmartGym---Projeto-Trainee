import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
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
            <Form.Group controlId="Email">
              <div class="form-group-email-label">
              <Form.Label>Endereço de e-mail</Form.Label>
              </div>
              <Form.Control type="email" class="form-controle-inputs" onChange={(e)=>setEmail(e.target.value)}/>
              
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <div class="form-group-pass-label">
              <Form.Label>Senha</Form.Label>
              </div>
              <Form.Control type="password" class="form-controle-inputs" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group>

            <button class="button" type="submit" oncLICK>
              <div class="button-label">
                ENTRAR
              </div>
              </button>
            </Form.Group>
            {/* <Button variant="primary" onClick={(login)} > Entrar </Button> */}
    
        </div>
      </div>
    );
}
export default Login;