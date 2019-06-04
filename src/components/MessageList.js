import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';

const startingSize = 100;

class MessageList extends React.Component {
   
    constructor(){
        super();
        
    }

    render() {
        const header =(<h3> Message Log</h3>);
        return (<div>
            {header}
            <ul>
                <Messages messages={this.props.messages} numberOfMessages={this.props.numberOfMessages} moveMessages={this.props.scrollingMessages}/>
            </ul>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessageList);
