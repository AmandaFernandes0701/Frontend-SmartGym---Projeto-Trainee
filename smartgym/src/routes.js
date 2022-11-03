import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Exercicios from './pages/Exercicios';
import Perfil from './pages/Perfil'; 
import Menu_Sanduiche from "./pages/Menu_Sanduiche";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/exercicios' component={Exercicios}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/temp' component={Menu_Sanduiche}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;