import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import BlockPlayer from "../../../block/details/player/BlockPlayer";

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

export default function DraftRoomPlayersSelected(props) {
    const classes = useStyles();
    const [initialBid, setInitialBid] = useState(1);
    const handleChange = event => {
        setInitialBid(event.target.value);
    };

    const isAddToBlockDisabled = () => {
        return props.hideAddToBlock || !props.isSlotAvailableForPlayer;
    }

    return (
        <div>
            <Grid container>
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
                                    disabled={isAddToBlockDisabled()}
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
                                disabled={isAddToBlockDisabled()}
                                onClick={() => props.sendAddToBlock(props.player.id, initialBid)}
                            >
                                <AddIcon />
                            </Fab>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={11}>
                    <BlockPlayer
                        player={props.player}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
