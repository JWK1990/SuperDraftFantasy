import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
   select: {
     fontSize: 10,
   },
}));

export default function StatSelector(props) {
    const classes = useStyles();

    return (
        <FormControl>
            <Select
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                variant={"standard"}
                autoWidth
            >
                {props.optionList.map((option) => (
                    <MenuItem key={props.id + "-" + option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
