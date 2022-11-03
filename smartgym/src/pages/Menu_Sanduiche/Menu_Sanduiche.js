import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import React, { useState } from "react";
import { IconContext, icons } from "react-icons/lib";
import { RiHomeHeartFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FiLogIn, FiMenu } from "react-icons/fi";
import "./Menu_Sanduiche.css";
import { useHistory } from "react-router-dom";
import { ClassNames } from "@emotion/react";

function Menu_Sanduiche() {
    const history = useHistory();
    const [currentPage, setcurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathName) {
        history.push(pathName);
        setcurrentPage(pathName);
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    const pages = [
        {
            pathName: "/home",
            icon: <RiHomeHeartFill/>,
            text: "Home",
            iconSize: "1.5em"
        },
        {
            pathName: "/perfil",
            icon: <ImProfile/>,
            text: "Perfil",
            iconSize: "1.5em"
        },
        {
            pathName: "/cadastro",
            icon: <BsFillPersonPlusFill/>,
            text: "Cadastro",
            iconSize: "1.5em"
        },
        {
            pathName: "/exercicios",
            icon: <GiWeightLiftingUp/>,
            text: "Exercícios",
            iconSize: "1.5em"
        },
        {
            pathName: "/login",
            icon: <FiLogIn/>,
            text: "Login",
            iconSize: "1.5em"
        },
    ]

    return (
        <>
        <AppBar position="static">
            <Toolbar className="Toolbar">
                <div className="Smart_Gym_Titulo">
                    <p>Smart Gym</p>
                </div>
                <IconButton
                    edge ="start"
                    color = "inherit"
                    aria-label="menu"
                    onClick={()=> handleDrawer(!open)}
                >
                    <FiMenu/>
                </IconButton>
            </Toolbar>

        </AppBar>

        <Drawer open={open} onClose ={()=> handleDrawer(false)}>

            <List className="list">
                {pages.map((listItem) => {
                    return (
                        <ListItem button
                            selected={currentPage === listItem.pathName}
                            onClick={() => { handleClick(listItem.pathName) }}>
                            <IconContext.Provider value={{ color: "#343434", size: listItem.iconSize}}>
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
        </>
    );
}
export default Menu_Sanduiche;