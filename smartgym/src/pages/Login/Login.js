import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import api from "../../services/api";
import "./Login.css"

function Login(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

      async function login(e){
        e.preventDefault();
        try {
          const response = await api.post('/login', {email,password});
          alert("Bem vindo", response.data.user.nome);
          history.push("/home");
        } catch (error) {
          if (error.response.status === 403){
            alert ("Credenciais Inválidas");
          }
          else {
            alert(error.response.data.notification);
          }
          console.warn(error);
        }
      }
    return (
      <div className="base">
        <div className="container-login">
            <div class="login-title">
            LOGIN
            </div>
              <div className="linha1text">
              <div className="text--Email">Endereço de e-mail</div>
              </div>

              <div className="linha1--">
                  <input className="input--Email" type="Email" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              
              <div className="linha2text">
                <p className="text--Senha">Senha</p>
              </div>

              <div className="linha2--">
                <input className="input--Senha" type="password" onChange={(e)=>setPassword(e.target.value)} />
              </div>


            <button class="button-generico" type="submit" onClick={(login)}>
              <div class="button-label-generico">
                ENTRAR
              </div>
              </button>
        </div>
      </div>
    );
}

export default Login;