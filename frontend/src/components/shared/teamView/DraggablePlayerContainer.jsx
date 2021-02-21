import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {isLeadBidderSelector} from "../../../store/selectors/BlockSelectors";
import PlayerCardForList from "./PlayerCard";

const getDynamicDroppableStyle = (baseStyles, positionStyles, item) => ({
    ...baseStyles,
    ...positionStyles,
    backgroundColor: item.dynamicSlotData.vacant ? baseStyles.vacantBackgroundColor
            : positionStyles.backgroundColor,
    borderColor: positionStyles.borderColor,
})

const getDraggingStyles = (provided, baseStyles, positionStyles) => ({
    ...baseStyles,
    ...positionStyles,
    ...provided.draggableProps.style,
    backgroundColor: baseStyles.draggingBackgroundColor,
})

class DraggablePlayerContainer extends React.Component {

    render() {
        return (
            <Draggable
                key={this.props.item.id}
                draggableId={this.props.item.id}
                index={this.props.index}
                isDragDisabled={this.props.item.dynamicSlotData.vacant || this.props.isLeadBidder}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{...snapshot.isDragging
                                ? getDraggingStyles(provided, this.props.baseStyles, this.props.positionStyles)
                                : getDynamicDroppableStyle(this.props.baseStyles, this.props.positionStyles, this.props.item)
                        }}
                        className={this.props.styles}
                    >
                        <PlayerCardForList
                            player={this.props.item.dynamicSlotData.player}
                            price={this.props.item.dynamicSlotData.price}
                            position={this.props.item.position}
                        />
                    </div>
                )}
            </Draggable>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLeadBidder: isLeadBidderSelector(state),
    }
}

export default connect(mapStateToProps)(DraggablePlayerContainer);
