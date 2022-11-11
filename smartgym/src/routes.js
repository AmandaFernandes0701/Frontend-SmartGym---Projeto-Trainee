import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Exercicios from './pages/Exercicios';
import Perfil from './pages/Perfil'; 
import Header from "./components/Header";
import Footer from "./components/Footer";

function Routes(){
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/exercicios' component={Exercicios}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/' component={Home}/>
            </Switch>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routes;