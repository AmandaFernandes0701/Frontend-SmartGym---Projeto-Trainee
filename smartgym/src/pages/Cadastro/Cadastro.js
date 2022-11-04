import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Cadastro.css"

function Cadastro() { 
    
  const [pessoa, setPessoa] = useState({});

  function handleInputChange(e) {
    const key = e.target.name;

    const newPessoa = {...pessoa};
    newPessoa[key] = e.target.value;

    setPessoa(newPessoa);
  }

  const history = useHistory();

    return (
      <div className="container">
        
        <div className="titulo">
            <h1 className="textTitulo">Bem vindo - Cadastre-se</h1>
        </div>

        <form className="inputs">

            <h1 className="dadosPessoais">Dados Pessoais</h1>
            
            <div className="linha1text">
                <p className="textNome">Nome</p>
                <p className="textIdade">Idade</p>
            </div>
            
            <div className="linha1">
                <input className="inputNome"
                   type="text" 
                   name='nome'
                   onChange={handleInputChange}
                />
                <input className="inputIdade"
                   type="text" 
                   name='idade'
                   onChange={handleInputChange} 
                />
            </div>

            <div className="linha2text">
                <p className="textCPF">CPF</p>
                <p className="textSexo">Sexo</p>
            </div>

            <div className="linha2">
                <input className="inputCPF"
                   type="text" 
                   name='cpf'
                   onChange={handleInputChange}
                />                
                <input className="inputSexo"
                   type="text" 
                   name='sexo'
                   onChange={handleInputChange} 
                />
            </div>

            <div className="linha3text">
                <p className="textEndereco">Endereço</p>
            </div>
            
            <div className="linha3">
                <input className="inputEndereco"
                   type="text" 
                   name='endereco'
                   onChange={handleInputChange}
                />
            </div>

            <div className="linha4text">
                <p className="textCidadeEstado">Cidade / Estado</p>
                <p className="textTelefone">Telefone</p>
            </div>

            <div className="linha4">
                <input className="inputCidadeEstado"
                   type="text" 
                   name='cidadeEstado'
                   onChange={handleInputChange}
                />                
                <input className="inputTelefone"
                   type="text" 
                   name='telefone'
                   onChange={handleInputChange} 
                />
            </div>

            <h1 className="dadosLogin">Dados de Login</h1>

            <p className="textEmail">E-mail</p>
            <input className="inputEmail"
               type="email" 
               name='login'
               onChange={handleInputChange} 
            />

            <p className="textSenha">Senha</p>
            <input className="inputSenha"
               type="password" 
               name='senha'
               onChange={handleInputChange} 
            />

            <p className="textConfSenha">Confirme sua senha</p>
            <input className="inputConfirmarSenha"
               type="password" 
               name='confirmarSenha'
               onChange={handleInputChange} 
            />

            <button className="botao" onClick={ () => {history.push("home");}}>
                Prosseguir
            </button>

        </form>
        
      </div>
    );
}

export default Cadastro;