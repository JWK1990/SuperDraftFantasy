import React, {useState} from "react";
import InputBase from "@material-ui/core/InputBase";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayerBar from "../../../shared/PlayerBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Paper from "@material-ui/core/Paper";

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

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

                <Grid item xs={1}>
                    <div className={classes.controlsDiv}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </div>
                </Grid>

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
        //                 disabled={props.isAddToBlockDisabled}
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
        //             disabled= {props.isAddToBlockDisabled}
        //         >
        //             <AddCircleOutlineIcon />
        //         </IconButton>
        //     </div>
        // </Container>
    );
}

export default DraftRoomPlayersSelected;
