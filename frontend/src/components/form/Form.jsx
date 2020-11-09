import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {MenuItem, Slider} from "@material-ui/core";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formDetails: this.props.formDetails,
            onSubmit: this.props.onSubmit,
        }

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.state.onSubmit();
    }

    getIsValidForSubmit = () => {
        let isValid = true;
        this.state.formDetails.fields.forEach(field => {
            if(this.getIsError(field, field.properties.value)) {
                return isValid = false;
            }
        })
        return isValid;
    }

    getIsError = (field, value) => {
        return field.componentType === TextField
            && field.properties.required
            && (value === "" || !value);
    }

    onChange = (e, value, id) => {
        console.log(e.target.value, "V: ", value);
        let formDetails = {...this.state.formDetails};
        let updatedFieldIndex = formDetails.fields.findIndex(
            field => field.properties.id === id
        );
        const updatedValue = e.target.value ? e.target.value : value;

        const isError = this.getIsError(formDetails.fields[updatedFieldIndex], updatedValue);
        formDetails.fields[updatedFieldIndex].properties = {
            ...formDetails.fields[updatedFieldIndex].properties,
            value: updatedValue,
            error: isError,
            helperText: isError ? formDetails.fields[updatedFieldIndex].properties.label + " is required." : ""
        }

        formDetails.isValidForSubmit = this.getIsValidForSubmit();
        this.setState({formDetails});
        console.log("Form Details: ", formDetails);
    }

    render() {
        const fields = [];
        this.state.formDetails.fields.map((field) => {
            let FieldComponentType = field.componentType;
            if(FieldComponentType === TextField) {
                field.properties['variant'] = "outlined";
                field.properties['fullWidth'] = true;
            }
            fields.push(
                <Grid item xs={field.width} key={field.properties.id}>

                    {/* Add Header if Slider. */}
                    {FieldComponentType === Slider ?
                        <Typography id={field.properties.id + "-header"} gutterBottom>
                            {field.properties.label}
                        </Typography>
                        : ""
                    }

                    {/* Add Component. */}
                    <FieldComponentType
                        {...field.properties}
                        onChange={(e, value) =>
                            this.onChange(e, value, field.properties.id)}
                    >
                        {/* Add Options if Select. */}
                        {field.properties.options ?
                            field.properties.options.map(option => {
                                return <MenuItem key={option.key} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            })
                            : null
                        }

                    </FieldComponentType>
                </Grid>
            )
        })

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {this.state.formDetails.title}
                    </Typography>
                    <form className="form">
                        <Grid container spacing={2}>
                            {fields}
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            fullWidth
                            onClick={this.onSubmit}
                            disabled={!this.state.formDetails.isValidForSubmit}
                        >
                            {this.state.formDetails.submitText}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href={this.state.formDetails.additionalTextLink} variant="body2">
                                    {this.state.formDetails.additionalText}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}/>
            </Container>
        );
    }
}

export default Form;
