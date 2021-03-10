import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import BlockPlayer from "../../../block/details/player/BlockPlayer";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    addToBlockDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
    },
    addToBlockPriceDiv: {
        paddingBottom: 40,
    },
    ratingImage: {
        height: 56,
        width: 56,
    }
}));

export default function DraftRoomPlayersSelected(props) {
    const classes = useStyles();
    const [initialBid, setInitialBid] = useState(1);
    const handleChange = event => {
        setInitialBid(event.target.value);
    };

    return (
        <Grid container>
            <Grid item xs={1} >
                {!props.player.available
                    ? <Typography>Sold To.</Typography>
                    : props.getIsAddToBlockHidden()
                        ? <Typography>Empty</Typography>
                        : (
                            <div className={classes.addToBlockDiv}>
                                <div className={classes.addToBlockPriceDiv}>
                                    <FormControl variant="outlined">
                                        <InputLabel id="starting-bid">Bid</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={initialBid}
                                            onChange={handleChange}
                                            label="Initial Bid"
                                            disabled={props.getIsAddToBlockDisabled()}
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
                                        disabled={props.getIsAddToBlockDisabled()}
                                        onClick={() => props.sendAddToBlock(props.player.id, initialBid)}
                                    >
                                        <AddIcon />
                                    </Fab>
                                </div>
                            </div>
                        )

                }

            </Grid>
            <Grid item xs={11}>
                <BlockPlayer
                    player={props.player}
                />
            </Grid>
        </Grid>
    );
}
