import React from "react";
import ActiveAddToBlock from "./ActiveAddToBlock";
import InactiveAddToBlock from "./InactiveAddToBlock";

export default function AddToBlockClockContainer(props) {

    return(
        props.activeOnTheBlock
            ? (
                <ActiveAddToBlock
                    duration={props.duration}
                    initialRemainingTime={props.initialRemainingTime}
                    addToBlockKey={props.addToBlockKey}
                />
            ) : (
                <InactiveAddToBlock
                    duration={props.duration}
                    initialRemainingTime={props.initialRemainingTime}
                    addToBlockKey={props.addToBlockClockKey}
                    onTheBlockTeamName={props.onTheBlockTeamName}
                />
            )

    )

}
