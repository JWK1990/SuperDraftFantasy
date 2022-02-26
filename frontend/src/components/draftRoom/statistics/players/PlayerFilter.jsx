import React from "react";
import {draftIdSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import {Checkbox, createMuiTheme, FormControlLabel, MuiThemeProvider, Switch, TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const theme = createMuiTheme({
    overrides: {
        MuiFormControlLabel: {
            label: {
                fontSize: "1vw",
            }
        },
        MuiSvgIcon: {
            fontSizeSmall: "1vw",
        }
    }
});

const styles = {
    mainContainer: {
      height: "var(--draft-room-player-filter-height)"
    },
    filterDiv: {
        height: "100%",
    },
    checkboxDef: {
        color: "var(--def-color-primary) !important",
        fontSize: "10px",
    },
    checkboxMid: {
        color: "var(--mid-color-primary)!important",
    },
    checkboxRuc: {
        color: "#FFA500",
    },
    checkboxFwd: {
        color: "var(--fwd-color-primary) !important",
    },
    labelDef: {
        color: "var(--def-color-primary)",
    },
    labelMid: {
        color: "var(--mid-color-primary)",
    },
    labelRuc: {
        color: "#FFA500",
    },
    labelFwd: {
        color: "var(--fwd-color-primary)",
    },
}

class PlayerFilter extends React.PureComponent {

    render() {
        const {classes} = this.props;

        return(
            <MuiThemeProvider theme={theme}>
                <Grid container item className={classes.mainContainer}>
                    <Grid item xs={4}>
                        <TextField
                            id="outlined-basic"
                            label="Search Name"
                            variant="outlined"
                            value={this.props.lastNameSearch}
                            onChange={this.props.triggerSearchChange}
                            size={"small"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                                control={
                                    <Checkbox
                                        className={classes.checkboxDef}
                                        checked={this.props.checkedDEF}
                                        onChange={this.props.triggerPositionFilterChange}
                                        name="checkedDEF"
                                        size={"small"}
                                    />
                                }
                                className={classes.labelDef}
                                label="DEF"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        className={classes.checkboxMid}
                                        checked={this.props.checkedMID}
                                        onChange={this.props.triggerPositionFilterChange}
                                        name="checkedMID"
                                        size={"small"}
                                    />
                                }
                                className={classes.labelMid}
                                label="MID"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        className={classes.checkboxRuc}
                                        checked={this.props.checkedRUC}
                                        onChange={this.props.triggerPositionFilterChange}
                                        name="checkedRUC"
                                        size={"small"}
                                    />
                                }
                                className={classes.labelRuc}
                                label="RUC"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        className={classes.checkboxFwd}
                                        checked={this.props.checkedFWD}
                                        onChange={this.props.triggerPositionFilterChange}
                                        name="checkedFWD"
                                        size={"small"}
                                    />
                                }
                                className={classes.labelFwd}
                                label="FWD"
                            />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.props.isHideDraftedFilterOn}
                                    onChange={this.props.triggerHideDraftedSwitchChange}
                                    name="hideDraftedFilter"
                                    color="primary"
                                />
                            }
                            label="Hide Drafted"
                            labelPlacement="start"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.props.isShowWatchlistFilterOn}
                                    onChange={this.props.triggerShowWatchlistSwitchChange}
                                    name="showWatchlistFilter"
                                    color="primary"
                                />
                            }
                            label="Show Watchlist"
                            labelPlacement="start"
                        />
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
    }
}

export default connect(mapStateToProps)(withStyles(styles)(PlayerFilter));
