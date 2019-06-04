import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createIFrame } from '../actions';

export default class Messages extends React.Component {

    constructor(){
        super();
        this.state = {
            showPopUp: false
        };
    }

    createAndStoreIFrame(message){
        let url =("//" + "google.com/search?q=" + message.toString(), '_blank');
        this.props.createIFrame(message.toString());
        
    }


    render(){
        const { messages } = this.props;
        let messageList = [];
        for (var i = 0; i < this.props.numberOfMessages; i++){
            let message = messages[i];
            if (this.props.moveMessages){
                messageList.push(<li key={i}><marquee behaviour="alternate" onMouseOver={this.stop} onMouseOut={this.start} target="popup" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400' ); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}}> {message} </marquee></li>);
            } else {
                messageList.push(<li key ={i} target="popup" onClick={() => {window.open(("//" + "google.com/search?q=" + message.toString()), 'popup', 'width=400,height=400'); return false;}} onContextMenu={() => {window.open(("https://www.youtube.com/results?search_query=" + message.toString()), 'popup', 'width=400,height=400'); return false;}}> {message} </li>);
            }
        }
        
        return messageList;

    }
}
