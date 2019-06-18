import React from 'react';
import { connect } from 'react-redux';

class Messages extends React.Component {

    constructor(){
        super();
        this.state={reload:true};
    }

    reload(){
        let toggle = this.state.reload;
        this.setState({reload: !toggle});
    }

    render(){
        let messageList = [];
        for (var i = 0; i < this.props.numberOfMessages; i++){
            let message = this.props.messages[i];
            if (this.props.moveMessages){
                messageList.push(<li className="indivMessage"
                 key={i}>
                 <marquee behaviour="alternate" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400' ); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} data-hover="Left click for google, right click for youtube"> {message} </marquee>
                 </li>);
            } else {
                messageList.push(<li key ={i} className ="indivMessage" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}}> {message} </li>);
            }
        }
        
        return messageList;

    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Messages);
