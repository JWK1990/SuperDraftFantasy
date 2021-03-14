import React from "react";
import {isCurrentUserCommissionerSelector} from "../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import CommissionerControls from "./CommissionerControls";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    draftOverviewRootDiv:
        {
            height: "100%",
        }
}

class DraftOverview extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.draftOverviewRootDiv}>
                <Typography variant={"subtitle2"} align={"center"} color={"textPrimary"}>
                    WAFL Draft 2021
                </Typography>
                <Typography variant={"subtitle2"} align={"center"} color={"textSecondary"}>
                    10 Teams, 22 Players
                </Typography>
                <Typography variant={"subtitle2"} align={"center"} color={"textSecondary"}>
                    $300 Budget
                </Typography>
                {this.props.isUserCommissioner
                    ? <CommissionerControls />
                    : null
                }
            </div>

        )

    }

}

const mapStateToProps = (state) => ({
    isUserCommissioner: isCurrentUserCommissionerSelector(state),
})

export default connect(mapStateToProps)(withStyles(styles)(DraftOverview));
