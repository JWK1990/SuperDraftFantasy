import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayerBar from "../../../shared/PlayerBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    controlsDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    inputDiv: {
        paddingBottom: 40,
    }
}));

function DraftRoomPlayersSelected(props) {

    const classes = useStyles();
    const [initialBid, setInitialBid] = useState(1);
    const handleChange = event => {
        setInitialBid(event.target.value);
    };

    return (
        <div>
            <Grid container>
                {
                    props.hideAddToBlock ?
                        null :
                        <Grid item xs={1}>
                            <div className={classes.controlsDiv}>
                                <div className={classes.inputDiv}>
                                    <FormControl variant="outlined">
                                        <InputLabel id="starting-bid">Bid</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={initialBid}
                                            onChange={handleChange}
                                            label="Initial Bid"
                                            disabled={!props.isSlotAvailableForPlayer}
                                        >
                                            <MenuItem value={initialBid}>${initialBid}</MenuItem>
                                            <MenuItem value={10}>$10</MenuItem>
                                            <MenuItem value={20}>$20</MenuItem>
                                            <MenuItem value={30}>$30</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <Fab
                                        color="primary"
                                        aria-label="add"
                                        disabled={!props.isSlotAvailableForPlayer}
                                        onClick={() => props.sendAddToBlock(props.player.id, initialBid)}
                                    >
                                        <AddIcon />
                                    </Fab>
                                </div>
                            </div>
                        </Grid>
                }
                <Grid item xs={11}>
                    <PlayerBar
                        player={props.player}
                    />
                </Grid>
            </Grid>
        </div>


        // <Container component="main" maxWidth="lg">
        //     <p>{props.selected ? props.selected.firstName : "TBA"} </p>
        //     <p>{props.selected ? props.selected.lastName : "TBA"} </p>
        //     <p>{props.selected ? props.selected.teamId : "TBA"} </p>
        //     <p>{props.selected ? props.selected.position : "TBA"} </p>
        //
        //     <div>
        //         <FormControl className={classes.margin}>
        //             <InputLabel id="demo-customized-select-label">Starting Price</InputLabel>
        //             <Select
        //                 labelId="demo-customized-select-label"
        //                 id="demo-customized-select"
        //                 value={initialBid}
        //                 onChange={handleChange}
        //                 input={<BootstrapInput />}
        //                 disabled={props.isSlotAvailableForPlayer}
        //             >
        //                 <MenuItem value={1}>$1</MenuItem>
        //                 <MenuItem value={10}>$10</MenuItem>
        //                 <MenuItem value={20}>$20</MenuItem>
        //                 <MenuItem value={30}>$30</MenuItem>
        //             </Select>
        //         </FormControl>
        //         <IconButton
        //             aria-label="previous"
        //             onClick={() => props.sendAddToBlock(props.selected.id, initialBid)}
        //             disabled= {props.isSlotAvailableForPlayer}
        //         >
        //             <AddCircleOutlineIcon />
        //         </IconButton>
        //     </div>
        // </Container>
    );
}

export default DraftRoomPlayersSelected;
