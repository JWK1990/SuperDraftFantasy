import React from 'react';
import PlayerBar from "../../../shared/PlayerBar";

export default function BlockPlayer(props) {
    return (
        <PlayerBar player={props.player}/>
    );
}
