import React from "react";
import VacantBlock from "./vacant/VacantBlock";
import BlockPlayer from "./BlockPlayer";
import PausedDraft from "./paused/PausedDraft";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    rootDiv: {
        height: "100%",
        backgroundColor: "pink",
    }
})

function BlockPlayerContainer(props) {
    const {classes} = props;

    return(
        <div className={classes.rootDiv}>
            {props.showAddToBlockClock ?
                <VacantBlock
                    onTheBlockTeamName={props.onTheBlockTeamName}
                    isOnTheBlock={props.isOnTheBlock}
                />
                : props.showBidClock ?
                    <BlockPlayer
                        player={props.onTheBlockPlayer}
                    />
                    :
                    <PausedDraft
                        commissionerTeamName={props.commissionerTeamName}
                    />
            }
        </div>
    )

}

export default withStyles(styles)(BlockPlayerContainer);
