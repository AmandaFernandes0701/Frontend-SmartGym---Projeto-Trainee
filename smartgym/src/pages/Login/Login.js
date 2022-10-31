import React from "react";
//import {Link} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./login.css"

function Login(){
    return (
      <div className="base">
        <div className="container">
          <h1>Login</h1>

          <Form className="inputs">
            <Form.Group controlId="Email">
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            {/* <div className="inputs">
            </div> */}

          </Form>
    
        </div>
      </div>
    );
}
export default Login;