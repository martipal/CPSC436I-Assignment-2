import React from 'react';

export default class Messages extends React.Component {

    constructor(){
        super();
        this.state = {
            showPopUp: false
        };
    }

    randomColour(){
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    render(){
        const { messages } = this.props;
        let messageList = [];
        for (var i = 0; i < this.props.numberOfMessages; i++){
            let message = messages[i];
            if (this.props.moveMessages){
                messageList.push(<li className="indivMessage"
                 key={i}>
                 
                 <marquee behaviour="alternate" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400' ); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} data-hover="Left click for google, right click for youtube"> {message} </marquee></li>);
            } else {
                messageList.push(<li key ={i} className ="indivMessage" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}}> {message} </li>);
            }
        }
        
        return messageList;

    }
}
