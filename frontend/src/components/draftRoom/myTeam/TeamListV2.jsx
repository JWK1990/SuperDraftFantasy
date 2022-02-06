import React from "react";
import PlayerCard from "../../shared/teamView/PlayerCard";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    mainContainer: {
        height: "100%",
    }
}

const buildFieldLayout = () => {
    let fieldLayout = [];
    for(let i= 0; i < 5; i++) {
        let defSlot = {
            slotId: i,
            player: null,
            vacant: true,
            slotPosition: "DEF",
        }
        fieldLayout.push(defSlot);
    }
    for(let i= 0; i < 7; i++) {
        let midSlot = {
            slotId: i,
            player: null,
            vacant: true,
            slotPosition: "MID",
        }
        fieldLayout.push(midSlot);
    }
    for(let i= 0; i < 1; i++) {
        let rucSlot = {
            slotId: i,
            player: null,
            vacant: true,
            slotPosition: "RUC",
        }
        fieldLayout.push(rucSlot);
    }
    for(let i= 0; i < 5; i++) {
        let fwdSlot = {
            slotId: i,
            player: null,
            vacant: true,
            slotPosition: "FWD",
        }
        fieldLayout.push(fwdSlot);
    }
    for(let i= 0; i < 4; i++) {
        let benchSlot = {
            slotId: i,
            player: null,
            vacant: true,
            slotPosition: "BENCH",
        }
        fieldLayout.push(benchSlot);
    }
    return fieldLayout;
}

const addPlayerToField = (field, player) => {
    const slotIndex = field.findIndex(slot => {
        return slot.slotPosition === player.primaryPosition && slot.vacant === true;
    })
    field[slotIndex] = {...field[slotIndex], player: player, vacant: false};
}

class TeamListV2 extends React.Component {

    playerList = [
        {firstName: "Jarryd", lastName: "Roughead", primaryPosition: "FWD", secondaryPosition: "RUC", price: 10},
        {firstName: "Cyril", lastName: "Rioli", primaryPosition: "FWD", secondaryPosition: "MID", price: 10},
        {firstName: "Tom", lastName: "Mitchell", primaryPosition: "MID", secondaryPosition: "", price: 10},
        {firstName: "Sam", lastName: "Mitchell", primaryPosition: "MID", secondaryPosition: "", price: 10},
    ]

    fieldLayout = buildFieldLayout();

    render() {
        const {classes} = this.props;

        this.playerList.forEach(player => {
            addPlayerToField(this.fieldLayout, player);
        });

        return (
            <Grid container spacing={0.5} className={classes.mainContainer}>
                {
                    this.fieldLayout.map(slot => {
                        return <PlayerCard
                            slot={slot}
                            player={slot.player}
                            price={slot.player != null ? slot.player.price : null}
                        />
                    })
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(TeamListV2);
