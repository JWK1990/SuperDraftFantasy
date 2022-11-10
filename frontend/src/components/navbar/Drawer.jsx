import React, { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    drawer: {
        backgroundColor: "var(--navbar-blue)",
    },
    link: {
        textDecoration:"none",
        color: "var(--navbar-pink)",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    },
    paper: {
        backgroundColor: "var(--navbar-blue)",
        color: "pink"
    }
}));

function DrawerComponent(props) {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                classes={{ paper: classes.paper }}
            >
                <List>
                    {
                        props.links.map((link, index) => {
                            return (
                                <div key={index}>
                                    <ListItem onClick={() => setOpenDrawer(false)}>
                                        <ListItemText>
                                            <Link to={link.to} className={classes.link}>{link.text}</Link>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider/>
                                </div>
                            )
                        })
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
