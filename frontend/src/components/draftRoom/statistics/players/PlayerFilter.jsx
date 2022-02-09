import React from "react";
import DraftService from "../../../../services/DraftService";
import {draftIdSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import {Checkbox, FormControlLabel, Switch, TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import PlayerListV3 from "./PlayerListV3";

const styles = {
    filterDiv: {
        height: "100%",
    },
    checkboxDef: {
        color: "var(--def-color-primary) !important",
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
        paddingRight: 20,
    },
    labelMid: {
        color: "var(--mid-color-primary)",
        paddingRight: 20,
    },
    labelRuc: {
        color: "#FFA500",
        paddingRight: 20,
    },
    labelFwd: {
        color: "var(--fwd-color-primary)",
        paddingRight: 20,
    },
}

class PlayerFilter extends React.PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: [],
        expandedPanelIndex: false,
        lastNameSearch: '',
        positionFilter: '',
        isHideDraftedFilterOn: true,
        typingTimer: null,
        checkedDEF: false,
        checkedMID: false,
        checkedRUC: false,
        checkedFWD: false,
    };

    _loadNextPage = () => {
        this.setState({isNextPageLoading: true}, () => {
            const positionFilter = this.getPositionFilterList();
            DraftService.getPlayersPageByDraft(
                this.props.draftId,
                this.state.items.length/25,
                25,
                this.state.lastNameSearch,
                positionFilter,
                this.state.isHideDraftedFilterOn,
            )
                .then(players => {
                    this.setState(state => ({
                            /* Players are loaded in batches of 25 and therefore hasNextPage is calculated in batches of 25.
                               If the last batch contained the last player, then hasNextPage is false (hence the 778-25).
                            */
                            hasNextPage: state.items.length < (players.data.totalElements - 25),
                            isNextPageLoading: false,
                            items: [...state.items].concat(players.data.content),
                        }));
                    }
                );
        });
    };

    getPositionFilterList() {
        let positionFilter = "";
        if(this.state.checkedDEF) {
            positionFilter += "DEF"
        }
        if(this.state.checkedMID) {
            positionFilter += "MID"
        }
        if(this.state.checkedRUC) {
            positionFilter += "RUC"
        }
        if(this.state.checkedFWD) {
            positionFilter += "FWD"
        }
        return positionFilter;
    }

    handleExpandedPanelChange = (panelId, listRef) => (event, isExpanded) => {
        const previouslyExpandedPanelIndex = this.state.expandedPanelIndex;
        this.setState({expandedPanelIndex: isExpanded ? panelId : false})
        // Required to recalculate the rowHeights when rows are expanded.
        if(listRef.current) {
            // Recalculate rowHeights from the first row that was affected by the expansion change.
            const startIndex = previouslyExpandedPanelIndex < panelId ? previouslyExpandedPanelIndex : panelId;
            listRef.current.resetAfterIndex(startIndex);
        }
    };

    handleSwitchChange = (event) => {
        this.setState({
            isHideDraftedFilterOn: event.target.checked,
            items: [],
        });
        this._loadNextPage();
    }

    handleSearchChange = (event) => {
        this.setState({lastNameSearch: event.target.value})
        clearTimeout(this.state.typingTimer);
        const typingTimer = setTimeout(() => {
            this.triggerItemsUpdate();
            }, 500)
        this.setState({typingTimer: typingTimer});
    }

    handlePositionFilterChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
        this.triggerItemsUpdate();
    }

    triggerItemsUpdate = () => {
        this.setState({
            items: [],
        });
        this._loadNextPage();
    }

    render() {
        const { hasNextPage, isNextPageLoading, items, expandedPanelIndex, isHideDraftedFilterOn } = this.state;
        const {classes} = this.props;

        return(
            <Grid container item>
                <Grid item xs={5}>
                    <TextField
                        id="outlined-basic"
                        label="Search Name"
                        variant="outlined"
                        value={this.state.lastNameSearch}
                        onChange={this.handleSearchChange}
                    />
                </Grid>
                <Grid item xs={5}>
                    <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkboxDef}
                                    checked={this.state.checkedDEF}
                                    onChange={this.handlePositionFilterChange}
                                    name="checkedDEF"
                                />
                            }
                            className={classes.labelDef}
                            label="DEF"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkboxMid}
                                    checked={this.state.checkedMID}
                                    onChange={this.handlePositionFilterChange}
                                    name="checkedMID"
                                />
                            }
                            className={classes.labelMid}
                            label="MID"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkboxRuc}
                                    checked={this.state.checkedRUC}
                                    onChange={this.handlePositionFilterChange}
                                    name="checkedRUC"
                                />
                            }
                            className={classes.labelRuc}
                            label="RUC"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkboxFwd}
                                    checked={this.state.checkedFWD}
                                    onChange={this.handlePositionFilterChange}
                                    name="checkedFWD"
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
                                checked={this.state.isHideDraftedFilterOn}
                                onChange={this.handleSwitchChange}
                                name="hideDraftedFilter"
                                color="primary"
                            />
                        }
                        label="Hide Drafted"
                        labelPlacement="start"
                    />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
    }
}

export default connect(mapStateToProps)(withStyles(styles)(PlayerFilter));
