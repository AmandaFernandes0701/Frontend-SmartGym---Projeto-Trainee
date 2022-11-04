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
    <div className="body">
      <div className="base">
        <div className="container">
          <h1>Login</h1>

          <Form className="inputs">
            <Form.Group controlId="Email">
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
              
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group>
            <button class="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>
            </Form.Group>
            {/* <Button variant="primary" onClick={(login)} > Entrar </Button> */}
            

          </Form>
    
        </div>
      </div>
    </div>
    );
}
export default Login;