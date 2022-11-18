import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Exercicios from './pages/Exercicios';
import Perfil from './pages/Perfil'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={(props) =>
    isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect
            to={{pathname: "/cadastro", state: {from: props.location}}}
            />
        )
    }
    />
);

function Routes(){
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <PrivateRoute path='/exercicios' component={Exercicios}/>
                <PrivateRoute path='/perfil' component={Perfil}/>
                <Route path='/' component={Home}/>
                <Route component={() => <Redirect to="/cadastro"/>} />
            </Switch>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routes;