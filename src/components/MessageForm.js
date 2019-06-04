import React, {Component} from 'react';
import {connect} from 'react-redux';
import { clearMessages, addMessage } from '../actions';

class MessageForm extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event){
        event.preventDefault();
        console.log(event.target.text.value);
        this.props.addMessage(event.target.text.value.toString());
    }

    render(){
        console.log(this.props);
        return (
            <div>
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
          <input id="input_field" ref={input => this.inputField=input} name="text" type="text" defaultValue="Insert Message Here..." onFocus = {() => this.inputField.value=""}/>
        </label>
        <br />
        <input id="add" type="submit" value="Submit" />
        <input type="reset" className="button_stuff" value="Clear Form" />
      </form><button id="clear_button" className="button_stuff" onClick={() => {this.props.clearMessages(); return false;}}>Clear Message Log
        </button>
    </div>);
    }

}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}


export default connect(mapStateToProps, {addMessage, clearMessages})(MessageForm);