import React from 'react';

export default class Messages extends React.Component {

    constructor(){
        super();
        this.state = {
            showPopUp: false
        };
    }

    render(){
        const { messages } = this.props;
        let messageList = [];
        for (var i = 0; i < this.props.numberOfMessages; i++){
            let message = messages[i];
            if (this.props.moveMessages){
                messageList.push(<li key={i}><marquee behaviour="alternate" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400' ); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} data-hover="Left click for google, right click for youtube"> {message} </marquee></li>);
            } else {
                messageList.push(<li key ={i} onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}}> {message} </li>);
            }
        }
        
        return messageList;

    }
}
