import React from 'react';
import {connect} from 'react-redux';
import { addMessage } from '../actions';

class MessageForm extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event){
        event.preventDefault();
        let newMessage = event.target.text.value.toString();
        sendMessageWithPOST(newMessage);
        reload();
    }

    render(){
        return (
            <div>
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
            
          <input id="input_field" ref={input => this.inputField=input} name="text" type="text" defaultValue="Insert Message Here..." onFocus = {() => this.inputField.value=""}/>
        </label>
        <br />
        <input id="add" type="submit" value="Submit" />
        <input type="reset" className="button_stuff" value="Clear Form" />
      </form>
      <button id="clear_button" className="button_stuff" onClick={() => {this.props.clearMessages(); return false;}}>Clear Message Log
        </button>
    </div>);
    }

}

function reload(){
    window.location.reload();
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

function sendMessageWithPOST(newMessage){
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"message":newMessage})
    };

    fetch("http://localhost:9000/messages",options);
}


export default connect(mapStateToProps, {addMessage})(MessageForm);