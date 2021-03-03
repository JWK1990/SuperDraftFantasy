import React from 'react';
import PlayerBarPrimary from "../../../../shared/playerBar/PlayerBarPrimary";

export default function BlockPlayer(props) {
    return (
        <PlayerBarPrimary player={props.player}/>
    );
}
