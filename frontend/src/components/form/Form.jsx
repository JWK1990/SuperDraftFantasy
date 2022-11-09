import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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

    onTextAreaChange = (e, id) => {
        let formDetails = {...this.state.formDetails};
        let updatedFieldIndex = formDetails.fields.findIndex(
            field => field.properties.id === id
        );

        const isError = this.getIsError(formDetails.fields[updatedFieldIndex], e.target.value);
        formDetails.fields[updatedFieldIndex].properties = {
            ...formDetails.fields[updatedFieldIndex].properties,
            value: e.target.value,
            error: isError,
            helperText: isError ? formDetails.fields[updatedFieldIndex].properties.label + " is required." : ""
        }

        formDetails.isValidForSubmit = this.getIsValidForSubmit();
        this.setState({formDetails});
    }

    onSliderChange = (e, value, id) => {
        let formDetails = {...this.state.formDetails};
        let updatedFieldIndex = formDetails.fields.findIndex(
            field => field.properties.id === id
        );

        formDetails.fields[updatedFieldIndex].properties = {
            ...formDetails.fields[updatedFieldIndex].properties,
            value: value,
        }

        this.setState({formDetails});
    }

    render() {
        const fields = [];
        this.state.formDetails.fields.map((field) => {
            let FieldComponentType = field.componentType;
            if(FieldComponentType === TextField) {
                field.properties['variant'] = "outlined";
                field.properties['fullWidth'] = true;
                field.properties['onChange'] = (e, value) => this.onTextAreaChange(e, field.properties.id);
            }
            if(FieldComponentType === Slider) {
                field.properties['onChange'] = (e, value, id) => this.onSliderChange(e, value, field.properties.id);
                field.properties['valueLabelDisplay'] = "auto";
                field.properties['valueLabelFormat'] = (value) => value + "s";
            }
            return fields.push(
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
            <Container component="main" maxWidth="xs" style={{paddingTop: 20}}>
                <CssBaseline />
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        {this.state.formDetails.title}
                    </Typography>
                    <form className="form" style={{paddingTop: 20}}>
                        <Grid container spacing={2}>
                            {fields}
                        </Grid>
                        <Grid container style={{paddingTop: 20}}>
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
                        </Grid>
                        <Grid container justify="flex-end">
                            <Grid item>
                                {/*
                                <Link href={this.state.formDetails.additionalTextLink} variant="body2">
                                    {this.state.formDetails.additionalText}
                                </Link>
                                */}
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
