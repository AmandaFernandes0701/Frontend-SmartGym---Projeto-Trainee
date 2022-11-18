import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import api from "../../services/api";
import "./Cadastro.css";

function Cadastro() { 
    
  const [pessoa, setPessoa] = useState({});

  function handleInputChange(e) {
    const key = e.target.name;
    const newPessoa = {...pessoa};
    newPessoa[key] = e.target.value;

    setPessoa(newPessoa);
  }

  async function botaoProsseguir(e) {
    e.preventDefault();
    try {
        console.log(pessoa);
        const {confirmarSenha, ...user} = pessoa;
        if(confirmarSenha !== user.senha){
            console.log(confirmarSenha);
            console.log(user.senha);
            alert("Confirmção de senha errada");
            return;
        }
        const response = await api.post('/users', user);
        setPessoa(response.data);
        console.log(response);
        alert("Usuário cadastrado com sucesso");
        history.push("login");
    } catch (error) {
        console.warn(error);
        alert(error.response?.status);
    }
  }

  const history = useHistory();

    return (
      <div className="containerCadastro">
        
        <div className="tituloBemVindoo">
            <h1 className="textTituloBemVindoo">Bem vindo - Cadastre-se</h1>
        </div>

        <form className="retanguloInputs">

            <h1 className="dadosPessoaiss">Dados Pessoais</h1>
            
            <div className="linha1cadastro">
                <div className="bloco1cadastro">
                    <p className="textNomee">Nome</p>
                    <input className="inputNomee"
                       type="text" 
                       name='nome'
                       onChange={handleInputChange}
                    />
                </div>
                <div className="bloco2cadastro">
                    <p className="textIdadee">Idade</p>
                    <input className="inputIdadee"
                       type="number" 
                       name='idade'
                       onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="linha2cadastro">
                <div className="bloco3cadastro">
                    <p className="textCPFF">CPF</p>
                    <input className="inputCPFF"
                       type="tel" 
                       name='cpf'
                       onChange={handleInputChange}
                    />          
                </div>

                <div className="bloco4cadastro">
                    <p className="textSexoo">Sexo</p>
                    <input className="inputSexoo"
                       type="text" 
                       name='sexo'
                       onChange={handleInputChange} 
                    />
                </div>
            </div>
            
            <div className="linha3cadastro">
                <div className="bloco5cadastro">
                    <p className="textEnderecoo">Endereço</p>
                    <input className="inputEnderecoo"
                       type="text" 
                       name='endereco'
                       onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="linha4cadastro">
                <div className="bloco6cadastro">
                    <p className="textCidadeEstadoo">Cidade / Estado</p>
                    <input className="inputCidadeEstadoo"
                       type="text" 
                       name='cidadeestado'
                       onChange={handleInputChange}
                    />                
                </div>
                <div className="bloco7cadastro">
                    <p className="textTelefonee">Telefone</p>
                    <input className="inputTelefonee"
                       type="tel" 
                       name='telefone'
                       onChange={handleInputChange} 
                    />
                </div>
            </div>    

            <h1 className="dadosLoginn">Dados de Login</h1>

            <p className="textEmaill">E-mail</p>
            <input className="inputEmaill"
               type="email" 
               name='email'
               onChange={handleInputChange} 
            />

            <p className="textSenhaa">Senha</p>
            <input className="inputSenhaa"
               type="password" 
               name='senha'
               onChange={handleInputChange} 
            />

            <p className="textConfSenhaa">Confirme sua senha</p>
            <input className="inputConfirmarSenhaa"
               type="password" 
               name='confirmarSenha'
               onChange={handleInputChange} 
            />

            <button className="botaoCadastro" variant="primary" type="submit" onClick={botaoProsseguir}>
                Prosseguir
            </button>

        </form>
        
      </div>
    );
}

export default Cadastro;