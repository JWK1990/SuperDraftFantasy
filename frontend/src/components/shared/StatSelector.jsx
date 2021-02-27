import {MenuItem, TextField} from "@material-ui/core";
import React from "react";


export default function StatSelector(props) {
    return (
        <div className="centered-div">
            <TextField
                id={props.id}
                select
                value={props.value}
                onChange={props.onChange}
                helperText={props.helperText}
            >
                {props.optionList.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}
