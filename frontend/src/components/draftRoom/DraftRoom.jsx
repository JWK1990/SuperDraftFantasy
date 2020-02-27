import React from "react";
import DraftService from "./DraftService";

class DraftRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: '',
            draftDetails: '',
            players: [],
            errorText: '',
        };
        this.getDraft = this.getDraft.bind(this);
    }

    getDraft = () => {
        DraftService.getDraft(1)
            .then(response => {
                if(response.status === 200) {
                    console.log("Draft Received.");
                    this.setState({draftDetails: response.data})
                } else {
                    console.log(response);
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    getPlayers = () => {
        DraftService.getPlayers(1)
            .then(response => {
                if(response.status === 200) {
                    console.log("Players Received.");
                    this.setState({players: response.data})
                } else {
                    console.log(response);
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.getDraft} />
                <div>
                    <p>Draft Details: {this.state.draftDetails.name}</p>
                </div>
                <button onClick={this.getPlayers} />
                <div>
                    <p>Players: {this.state.players[0] ? this.state.players[0].firstName : 'No Players Yet'}</p>
                </div>
            </div>
        )
    }

};

export default DraftRoom;