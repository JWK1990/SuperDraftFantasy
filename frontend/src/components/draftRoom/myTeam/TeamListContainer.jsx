import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {draftTeamSelector} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {connect} from "react-redux";
import MyTeamList from "./MyTeamList";

const styles = {
    mainContainer: {
        height: "100%",
    },
}

const buildFieldLayout = () => {
    let fieldLayout = [];
    for(let i= 0; i < 5; i++) {
        let defSlot = {
            id: "DEF" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "DEF",
        }
        fieldLayout.push(defSlot);
    }
    for(let i= 0; i < 7; i++) {
        let midSlot = {
            id: "MID" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "MID",
        }
        fieldLayout.push(midSlot);
    }
    for(let i= 0; i < 1; i++) {
        let rucSlot = {
            id: "RUC" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "RUC",
        }
        fieldLayout.push(rucSlot);
    }
    for(let i= 0; i < 5; i++) {
        let fwdSlot = {
            id: "FWD" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "FWD",
        }
        fieldLayout.push(fwdSlot);
    }
    for(let i= 0; i < 4; i++) {
        let benchSlot = {
            id: "BENCH" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "BENCH",
        }
        fieldLayout.push(benchSlot);
    }
    return fieldLayout;
}

class TeamListContainer extends React.Component {

    fieldLayout = buildFieldLayout();

    constructor(props) {
        super(props);
        this.state = {
            teamList: this.fieldLayout,
        }
    }

    componentDidMount() {
        this.props.team.teamPlayerJoins.forEach(teamPlayerJoin => {
            this.addPlayerToMyTeamList(
                teamPlayerJoin.player,
                teamPlayerJoin.slotId,
                teamPlayerJoin.price,
            );
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const updatedTeamPlayerJoins = this.props.team.teamPlayerJoins;
        if (prevProps.team.teamPlayerJoins.length !== updatedTeamPlayerJoins.length) {
            const newTeamPlayerJoin = updatedTeamPlayerJoins[updatedTeamPlayerJoins.length - 1];
            this.addPlayerToMyTeamList(
                newTeamPlayerJoin.player,
                newTeamPlayerJoin.slotId,
                newTeamPlayerJoin.price
            );
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {};

    addPlayerToMyTeamList = (player, slotId, price) => {
        let slotIndex = this.state.teamList.findIndex(slot => slot.id === slotId);
        // The below if check is just in case the slotIndex isn't set.
        if(slotIndex === null || slotIndex < 0) {
            slotIndex = this.state.teamList.length - 1;
        }
        const {teamList} = this.state;
        teamList[slotIndex] =  {...teamList[slotIndex], player: player, price: price, isVacant: false};
        this.setState({teamList});
    }

    render() {
        const {classes} = this.props;
        return (
            <MyTeamList
                teamId={this.props.teamId}
                teamList={this.state.teamList}
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        stompClient: stompClientSelector(state),
        team: draftTeamSelector(state, props.teamId),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(TeamListContainer));
