import React, {useState} from "react";
import {ClickAwayListener} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import PlayerDetailsCard from "./PlayerDetailsCard";
import {usePopper} from "react-popper";


const styles = {
    box: {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    }
}

const PlayerDetailsPopper = (props) => {
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const [areDetailsHidden, setAreDetailsHidden] = useState(true);

    const getPopperOffset = () => {
        const heightOfViewport = window.innerHeight;
        const heightOfBlock = 200; //--draft-room-block-height.
        const heightOfFilters = 40; //--draft-room-player-filter-height
        const heightOfPlayersPane = heightOfViewport - heightOfBlock - heightOfFilters;
        const heightOfPlayerDetailsPadding = 200; //--player-details-popper-padding
        const heightOfPlayerDetails = heightOfPlayersPane - heightOfPlayerDetailsPadding;
        const playerPaneMidpoint = heightOfPlayersPane / 2;
        const startHeight = playerPaneMidpoint + (heightOfPlayerDetails / 2);
        return -Math.abs(startHeight);
    }

    const { styles, attributes, update } = usePopper(
        props.anchorElement,
        popperElement,
        {
            modifiers: [
                { name: 'arrow', options: { element: arrowElement } },
                { name: 'flip', enabled: false},
                { name: 'offset', options: { offset: [0 , getPopperOffset()] }, }
            ],

            placement: "top",
            strategy: "fixed",
    });

    if(props.player === null) {
        return null;
    }

    const handlePopperUpdate = () => {
        update();
        setAreDetailsHidden(false);
    }

    const triggerIconClose = () => {
        props.triggerClosePlayerDetails();
        setAreDetailsHidden(true);
    }

    const triggerClickAwayClose = (event) => {
        // If the click was inside of the PlayerList Grid Container, we close the Popper.
        // If the click was outside of the Grid Container, we keep the Popper open.
        // This stops the Popper being closed when a Coach bids.
        const wasClickInsideGridContainer = props.anchorElement.contains(event.target);
        if(wasClickInsideGridContainer) {
            props.triggerClosePlayerDetails(event);
            setAreDetailsHidden(true);
        }
    }

    return (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <ClickAwayListener onClickAway={(event) => triggerClickAwayClose(event)}>
                <PlayerDetailsCard
                    triggerIconClosePlayerDetails={triggerIconClose}
                    player={props.player}
                    areDetailsHidden={areDetailsHidden}
                    triggerPopperUpdate={handlePopperUpdate}
                />
            </ClickAwayListener>
            <div ref={setArrowElement} style={styles.arrow} />
        </div>
    );
};

export default withStyles(styles)(PlayerDetailsPopper);
