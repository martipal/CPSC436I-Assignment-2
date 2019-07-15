import React from 'react';

export default class Messages extends React.Component {

    render(){
        let messageList = [];
        let messagesToDisplay;
        if (this.props.messages.length < this.props.numberOfMessages){
            messagesToDisplay = this.props.messages.length;
        } else {
            messagesToDisplay = this.props.numberOfMessages;
        }

        if (this.props.messages.length > 0){
        for (var i =0; i <messagesToDisplay; i++){
            let messageObject = this.props.messages[i];
            let message = messageObject.message;
            let link = messageObject.link? messageObject.link.toString(): null;
            let linkUrl = createLink(message, link);
            if (this.props.moveMessages){
                messageList.push(<li className="indivMessage"
                 key={i}>
                 <marquee behaviour="alternate" onClick={() => {window.open(linkUrl, 'popup', 'width=400,height=400' ); return false;}}> {message} </marquee>
                 </li>);
            } else {
                messageList.push(<li key ={i} className ="indivMessage" onClick={() => {window.open({linkUrl}, 'popup', 'width=400,height=400'); return false;}}> {message} </li>);
            }
        }
    }
        
        return messageList;

    }
}

function createLink(message, linkTo){
    if (linkTo === "google"){
        return "//" + "google.com/search?q=" + message.toString();
    } else if (linkTo === "youtube"){
        return "https://www.youtube.com/results?search_query=" + message.toString();
    } else if (linkTo === "urbandictionary"){
        return "https://www.urbandictionary.com/define.php?term=" + message.toString();
    }
}
