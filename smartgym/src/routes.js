import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Exercicios from './pages/Exercicios';
import Perfil from './pages/Perfil';
import Footer from './pages/Footer'; 
import Header from "./Header/Header";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/exercicios' component={Exercicios}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/footer' component={Footer}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;