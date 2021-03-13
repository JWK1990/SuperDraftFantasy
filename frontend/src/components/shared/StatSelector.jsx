import {FormControl, MenuItem, Select} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    select: {
        fontSize: 14,
    },
}));

export default function StatSelector(props) {
    const classes = useStyles();
    let valueKey = "id";
    if(props.useNameAsValue) {
        valueKey = "name";
    }

    return (
        <FormControl className={classes.formControl}>
            <Select
                id={props.id}
                className={classes.select}
                value={props.value}
                onChange={props.onChange}
                variant={"standard"}
                autoWidth={true}
            >
                {props.optionList.map((option) => (
                    <MenuItem key={props.id + "-" + option.id} value={option[valueKey]}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
