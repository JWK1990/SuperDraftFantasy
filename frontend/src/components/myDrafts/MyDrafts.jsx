import React from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {myDraftsSelector} from "../../store/selectors/DraftSelectors";
import {getMyDraftsAction} from "../../store/actions";
import {Redirect} from "react-router-dom";

class MyDrafts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDraft: '',
            redirectPath: null
        };
    }

    componentDidMount() {
        this.props.getDrafts();
    }

    toggleAndSetSelected = (togglePanel, rowData) => {
        togglePanel();
        if(this.state.selectedDraft === rowData) {
            this.setState({selectedDraft: ''});
        } else {
            this.setState({selectedDraft: rowData});
        }
    }

    render() {
        if(this.state.redirectPath) {
            return <Redirect to={this.state.redirectPath}  />
        }
        return (
            <Container component="main" maxWidth="xl">
                <div style={{ maxWidth: "100%" }}>
                    <MaterialTable
                        title="Players"
                        columns={[
                            { title: "ID", field: "id", type: "numeric", searchable: false },
                            { title: "Name", field: "name" },
                            { title: "# Teams", field: "numOfTeams", searchable: false},
                            { title: "Status", field: "status", searchable: false},
                            { title: "Budget", field: "budget", searchable: false},
                            { title: "OTB Timer", field: "onTheBlockTimer", searchable: false},
                            { title: "Bid Timer", field: "bidTimer", searchable: false},
                        ]}
                        data={this.props.myDrafts}
                        actions={[
                            rowData => ({
                                icon: 'O',
                                tooltip: 'Add To Block',
                                onClick: (event, rowData) =>
                                    this.setState({redirectPath: `/draftRoom?id=${rowData.id}`}),
                                hidden: false
                            })
                        ]}
                        detailPanel={rowData => {
                            return (
                                <p>rowData</p>
                            )
                        }}
                        onRowClick={
                            (event, rowData, togglePanel) =>
                                this.toggleAndSetSelected(togglePanel, rowData)}
                        options={{
                            detailPanelType: "single",
                            rowStyle: rowData => ({
                                backgroundColor: '#FFFFFF'
                            })
                        }}
                    />
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        myDrafts: myDraftsSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    getDrafts: () => dispatch(getMyDraftsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDrafts);
