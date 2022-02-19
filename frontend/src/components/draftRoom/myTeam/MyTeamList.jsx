import React from "react";
import PlayerCard from "../../shared/teamView/PlayerCard";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    mainContainer: {
        height: "100%",
    },
    gridItem: {
        padding: 2,
    },
}

const buildFieldLayout = () => {
    let fieldLayout = [];
    for(let i= 0; i < 5; i++) {
        let defSlot = {
            slotId: i,
            player: null,
            price: null,
            vacant: true,
            slotPosition: "DEF",
        }
        fieldLayout.push(defSlot);
    }
    for(let i= 0; i < 7; i++) {
        let midSlot = {
            slotId: i,
            player: null,
            price: null,
            vacant: true,
            slotPosition: "MID",
        }
        fieldLayout.push(midSlot);
    }
    for(let i= 0; i < 1; i++) {
        let rucSlot = {
            slotId: i,
            player: null,
            price: null,
            vacant: true,
            slotPosition: "RUC",
        }
        fieldLayout.push(rucSlot);
    }
    for(let i= 0; i < 5; i++) {
        let fwdSlot = {
            slotId: i,
            player: null,
            price: null,
            vacant: true,
            slotPosition: "FWD",
        }
        fieldLayout.push(fwdSlot);
    }
    for(let i= 0; i < 4; i++) {
        let benchSlot = {
            slotId: i,
            player: null,
            price: null,
            vacant: true,
            slotPosition: "BENCH",
        }
        fieldLayout.push(benchSlot);
    }
    return fieldLayout;
}

class MyTeamList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myTeamList: buildFieldLayout(),
        }
    }

    componentDidMount() {
        this.props.teamPlayerJoinList.forEach(teamPlayerJoin => {
            this.addPlayerToMyTeamList(
                teamPlayerJoin.player,
                teamPlayerJoin.myTeamPositionType,
                teamPlayerJoin.price,
            );
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.teamPlayerJoinList.length > prevProps.teamPlayerJoinList.length) {
            const newTeamPlayerJoin = this.props.teamPlayerJoinList[this.props.teamPlayerJoinList.length - 1];
            this.addPlayerToMyTeamList(
                newTeamPlayerJoin.player,
                newTeamPlayerJoin.myTeamPositionType,
                newTeamPlayerJoin.price
            );
        }
    }

    addPlayerToMyTeamList = (player, myTeamPosition, price) => {
        let slotIndex = this.state.myTeamList.findIndex(slot => {
            return slot.slotPosition === myTeamPosition && slot.vacant === true;
        })
        if(slotIndex === null || slotIndex < 0) {
            slotIndex = this.state.myTeamList.length - 1;
        }
        const {myTeamList} = this.state;
        myTeamList[slotIndex] =  {...myTeamList[slotIndex], player: player, price: price, vacant: false};
        this.setState({myTeamList});
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container item className={classes.mainContainer}>
                {
                    this.state.myTeamList.map(slot => {
                        return (
                            <Grid item xs={12} className={classes.gridItem}>
                                <PlayerCard
                                    slot={slot}
                                    player={slot.player}
                                    price={slot.price}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(MyTeamList);
