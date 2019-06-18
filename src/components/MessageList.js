import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { addMessage } from '../actions';

class MessageList extends React.Component {
    
    callAPI() {
        fetch("http://localhost:9000/messages", {
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
            for (let i = data.length-1; i >=0; i--){
                this.props.addMessage(data[i].message);
            }
        });
    }

    componentWillMount(){
        this.callAPI();
    }

    render() {
        const header = (<h3 className="message_log_title"> Message Log</h3>);
        return (<div>
            {header}
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

export default connect(mapStateToProps, { addMessage })(MessageList);
