import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { IconContext, icons } from "react-icons/lib";
import { RiHomeHeartFill } from "react-icons/ri";
import "./Menu_Sanduiche.css"
import { useHistory } from "react-router-dom";
import Home from "../Home";

function Menu_Sanduiche() {
    const history = useHistory();
    const [currentPage, setcurrentPage] = useState("/home");

    function handleClick(pathName) {
        history.push(pathName);
        setcurrentPage(pathName);
    }

    const pages = [
        {
            pathName: "/home",
            icon: <RiHomeHeartFill/>,
            text: "Home"
        },
        {
            pathName: "/perfil",
            icon: <RiHomeHeartFill/>,
            text: "Perfil"
        },
        {
            pathName: "/cadastro",
            icon: <RiHomeHeartFill/>,
            text: "Cadastro"
        },
        {
            pathName: "/exercicios",
            icon: <RiHomeHeartFill/>,
            text: "Exercícios"
        },
        {
            pathName: "/login",
            icon: <RiHomeHeartFill/>,
            text: "Login"
        },
    ]

    return (
        <Drawer open={true}>

            <List className="list">
                {pages.map((listItem) => {
                    return (
                        <ListItem button
                            selected={currentPage === listItem.pathName}
                            onClick={() => { handleClick(listItem.pathName) }}>
                            <IconContext.Provider value={{ color: "#343434", size: "1.5em" }}>
                                {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className="ListItemText">
                                <Typography>{listItem.text}</Typography>
                            </ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
    );
}
export default Menu_Sanduiche;