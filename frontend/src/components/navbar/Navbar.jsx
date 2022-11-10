import React from "react";
import {AppBar, CssBaseline, makeStyles, Toolbar, Typography, useMediaQuery, useTheme,} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom";
import DrawerComponent from "./Drawer";
import SDBackground from "../../images/SDBackground.png";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: "var(--navbar-pink)",
        fontWeight: "bold",
    },
    link: {
        textDecoration: "none",
        color: "var(--navbar-pink)",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    logoBar: {
        textAlign: "center"
    },
}));

export default function Navbar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();

    if(location.pathname.includes("/draftRoom")) {
        return <></>;
    }

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h5" className={classes.logo}>
                    SUPERDRAFT
                </Typography>
                {isMobile ? (
                    <DrawerComponent links={props.links}/>
                ) : (
                    <div className={classes.navlinks}>
                        {
                            props.links.map((link, index) => {
                                return <Link to={link.to} className={classes.link} key={index}>{link.text}</Link>
                            })
                        }
                    </div>
                )}
            </Toolbar>
            <div className={classes.logoBar}>
                <img
                    src={SDBackground}
                    alt={"SDBackground"}
                    style={{maxWidth: "100%", maxHeight: "100%"}}
                ></img>
            </div>
        </AppBar>
    );
}
