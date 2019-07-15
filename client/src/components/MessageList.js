import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { addMessage, clearMessages } from '../actions';

class MessageList extends React.Component {

    callAPI() {
        // promises > timeout
        fetch("/messages", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            for (let i = data.length - 1; i >= 0; i--) {
                let link = data[i].link ? data[i].link.toString() : null;
                this.props.addMessage(({
                    "message": data[i].message.toString(),
                    "link": link
                }));
            }
        });
    }

    componentWillMount() {
        this.callAPI();
    }

    getLinkedMessages() {
        document.getElementById("toggleLinkButton").value = "Show All";

        fetch("/messages/withLinks", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
            this.props.clearMessages();
            for (let i = data.length - 1; i >= 0; i--) {
                this.props.addMessage(({
                    "message": data[i].message.toString(),
                    "link": data[i].link.toString()
                }));
            }
        });
    }

    render() {
        const header = (<h3 className="message_log_title"> Message Log</h3>);
        return (<div>
            {header}
            <button id="toggleLinkButton" className="btn btn-secondary btn-sm" onClick={() => this.getLinkedMessages()}>Show Only Messages With Links</button>
            <ul className="message_list">
                <Messages messages={this.props.messages} numberOfMessages={this.props.numberOfMessages} moveMessages={this.props.scrollingMessages} />
            </ul>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, { addMessage, clearMessages })(MessageList);
