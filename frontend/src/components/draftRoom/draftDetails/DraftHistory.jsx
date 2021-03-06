import React from "react";
import {List} from "@material-ui/core";
import DraftHistoryListItem from "./DraftHistoryListItem";
import {draftedPlayersSelector} from "../../../store/selectors/DraftSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";

const styles = {
    draftHistoryRootDiv: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        '& .MuiListItemIcon-root': {
            minWidth: 40,
        }
    },
    playerName: {
        fontWeight: 500,
        fontSize: 16,
    }
};

class DraftHistory extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.draftHistoryRootDiv}>
                <List dense>
                    {this.props.draftedPlayersList.map((draftedPlayer, index) => (
                        <DraftHistoryListItem draftedPlayer={draftedPlayer} key={draftedPlayer.player.id + "-" + index}/>
                    ))}
                </List>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    draftedPlayersList: draftedPlayersSelector(state),
})

export default connect(mapStateToProps)(withStyles(styles)(DraftHistory));
