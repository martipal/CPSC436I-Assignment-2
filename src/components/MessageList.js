import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { addMessage, clearMessages } from '../actions';

class MessageList extends React.Component {
    
    callAPI() {
        // promises > timeout
        fetch("http://localhost:9000/messages", {
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then(response => response.json()).then(data => {
            for (let i = data.length-1; i >=0; i--){
                this.props.addMessage(({"message":data[i].message.toString(),
                "link":data[i].link.toString()}));
            }
        });
    }

    componentWillMount(){
        this.callAPI();
    }

    getLinkedMessages(){
        fetch("http://localhost:9000/messages/withLinks", {
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then(response => response.json()).then(data => {
            this.props.clearMessages();
            for (let i = data.length-1; i >=0; i--){
                this.props.addMessage(({"message":data[i].message.toString(),
                "link":data[i].link.toString()}));
            }
        });
    }

    render() {
        const header = (<h3 className="message_log_title"> Message Log</h3>);
        return (<div>
            {header}
            <button className="btn btn-secondary btn-sm" onClick={() => this.getLinkedMessages()}>Show Only Messages With Links</button>
            <ul className ="message_list">
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
