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
        <div className="container">
          <div class="login-title">
           LOGIN
          </div>
          <Form className="inputs">
            <Form.Group controlId="Email">
              <div class="form-group-email-label">
              <Form.Label>Endereço de e-mail</Form.Label>
              </div>
              <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}/>
              
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <div class="form-group-pass-label">
              <Form.Label>Senha</Form.Label>
              </div>
              <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group>

            <button class="button" type="submit" onClick={(login)}> 
              <div class="button-label">
                ENTRAR
              </div>
              </button>
            </Form.Group>
            {/* <Button variant="primary" onClick={(login)} > Entrar </Button> */}
            

          </Form>
    
        </div>
      </div>
    );
}
export default Login;