import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {draftRosterSelector, draftTeamSelector} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {connect} from "react-redux";
import MyTeamList from "./MyTeamList";

const styles = {
    mainContainer: {
        height: "100%",
    },
}

const buildFieldLayout = (defSlots, midSlots, rucSlots, fwdSlots, benchSlots) => {
    let fieldLayout = [];
    for(let i= 0; i < defSlots; i++) {
        let defSlot = {
            id: "DEF" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "DEF",
        }
        fieldLayout.push(defSlot);
    }
    for(let i= 0; i < midSlots; i++) {
        let midSlot = {
            id: "MID" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "MID",
        }
        fieldLayout.push(midSlot);
    }
    for(let i= 0; i < rucSlots; i++) {
        let rucSlot = {
            id: "RUC" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "RUC",
        }
        fieldLayout.push(rucSlot);
    }
    for(let i= 0; i < fwdSlots; i++) {
        let fwdSlot = {
            id: "FWD" + i,
            player: null,
            price: null,
            isVacant: true,
            slotPosition: "FWD",
        }
        fieldLayout.push(fwdSlot);
    }
    for(let i= 0; i < benchSlots; i++) {
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

    constructor(props) {
        super(props);
        this.state = {
            teamList: [],
        }
    }

    componentDidMount() {
        const teamList = this.buildMyTeamList(this.props.team.teamPlayerJoins);
        this.setState({teamList: teamList});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.team.teamPlayerJoins !== this.props.team.teamPlayerJoins) {
            const teamList = this.buildMyTeamList(this.props.team.teamPlayerJoins);
            this.setState({teamList: teamList});
        }
    };

    buildMyTeamList = (teamPlayerJoins) => {
        const fieldLayout = buildFieldLayout(
            this.props.roster.def,
            this.props.roster.mid,
            this.props.roster.ruc,
            this.props.roster.fwd,
            this.props.roster.bench,
        );
        teamPlayerJoins.forEach(teamPlayerJoin => {
            this.addPlayerToMyTeamList(
                fieldLayout,
                teamPlayerJoin.player,
                teamPlayerJoin.slotId,
                teamPlayerJoin.price,
            );
        });
        return fieldLayout;
    }

    addPlayerToMyTeamList = (fieldLayout, player, slotId, price) => {
        let slotIndex = fieldLayout.findIndex(slot => slot.id === slotId);
        // The below if check is just in case the slotIndex isn't set.
        if(slotIndex === null || slotIndex < 0) {
            slotIndex = fieldLayout.length - 1;
        }
        fieldLayout[slotIndex] =  {...fieldLayout[slotIndex], player: player, price: price, isVacant: false};
    }

    render() {
        return (
            <MyTeamList
                teamId={this.props.teamId}
                teamList={this.state.teamList}
                isDisabled={this.props.isDisabled}
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        stompClient: stompClientSelector(state),
        team: draftTeamSelector(state, props.teamId),
        roster: draftRosterSelector(state),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(TeamListContainer));
