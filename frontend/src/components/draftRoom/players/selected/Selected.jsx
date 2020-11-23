import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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
}));

function DraftRoomPlayersSelected(props) {

    const classes = useStyles();
    const [initialBid, setInitialBid] = useState(1);
    const handleChange = event => {
        setInitialBid(event.target.value);
    };

    return (
        <Container component="main" maxWidth="lg">
            <p>{props.selected ? props.selected.firstName : "TBA"} </p>
            <p>{props.selected ? props.selected.lastName : "TBA"} </p>
            <p>{props.selected ? props.selected.teamId : "TBA"} </p>
            <p>{props.selected ? props.selected.position : "TBA"} </p>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Starting Price</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={initialBid}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        disabled={props.isAddToBlockDisabled}
                    >
                        <MenuItem value={1}>$1</MenuItem>
                        <MenuItem value={10}>$10</MenuItem>
                        <MenuItem value={20}>$20</MenuItem>
                        <MenuItem value={30}>$30</MenuItem>
                    </Select>
                </FormControl>
                <IconButton
                    aria-label="previous"
                    onClick={() => props.sendAddToBlock(props.selected.id, initialBid)}
                    disabled= {props.isAddToBlockDisabled}
                >
                    <AddCircleOutlineIcon />
                </IconButton>
            </div>
        </Container>
    );
}

export default DraftRoomPlayersSelected;
