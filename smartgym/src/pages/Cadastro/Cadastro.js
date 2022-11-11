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
            
            <div className="linha1">
                <div className="bloco1">
                    <p className="textNome">Nome</p>
                    <input className="inputNome"
                       type="text" 
                       name='nome'
                       onChange={handleInputChange}
                    />
                </div>
                <div className="bloco2">
                    <p className="textIdade">Idade</p>
                    <input className="inputIdade"
                       type="number" 
                       name='idade'
                       onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="linha2">
                <div className="bloco3">
                    <p className="textCPF">CPF</p>
                    <input className="inputCPF"
                       type="tel" 
                       name='cpf'
                       onChange={handleInputChange}
                    />          
                </div>

                <div className="bloco4">
                    <p className="textSexo">Sexo</p>
                    <input className="inputSexo"
                       type="text" 
                       name='sexo'
                       onChange={handleInputChange} 
                    />
                </div>
            </div>
            
            <div className="linha3">
                <div className="bloco5">
                    <p className="textEndereco">Endereço</p>
                    <input className="inputEndereco"
                       type="text" 
                       name='endereco'
                       onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="linha4">
                <div className="bloco6">
                    <p className="textCidadeEstado">Cidade / Estado</p>
                    <input className="inputCidadeEstado"
                       type="text" 
                       name='cidadeEstado'
                       onChange={handleInputChange}
                    />                
                </div>
                <div className="bloco7">
                    <p className="textTelefone">Telefone</p>
                    <input className="inputTelefone"
                       type="tel" 
                       name='telefone'
                       onChange={handleInputChange} 
                    />
                </div>
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

            <button className="botaoCadastro" onClick={ () => {history.push("home");}}>
                Prosseguir
            </button>

        </form>
        
      </div>
    );
}

export default Cadastro;