import React from 'react';
import { connect } from 'react-redux';
import { addMessage, clearMessages } from '../actions';

class MessageForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let newMessage = event.target.text.value.toString();
        let link = event.target.link.value.toString();
        if (link === "default"){
            link = null;
        }
        console.log(link);
        this.sendMessageWithPOST(JSON.stringify({"message":
            newMessage,
            "link":link}));
    }

    reload() {
        this.props.update();
    }

    clearMessages() {
        // make these calls asynchronous - 
        const options = {
            method: 'DELETE'
        };

        fetch("http://localhost:9000/messages/clearAll", options).then(response => response.json()).then(data => {
            this.props.clearMessages();
            console.log(data);
        });
    }

    sendMessageWithPOST(newMessage) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newMessage
    };

    fetch("http://localhost:9000/messages", options).then(response => response.json()).then(data => {
        this.props.addMessage({
            "message":data.message,
            "link":data.link});
    });
}


    render() {
        return (
            <div>
                <form className=".form-horizontal" onSubmit={this.handleSubmit}>
                    <label className="input_label">

                        <input className="input_field" ref={input => this.inputField = input} name="text" type="text" defaultValue="Insert Message Here..." onFocus={() => this.inputField.value = ""} />
                    </label>
                    <br />
                    <select className="link_select" name="link">
                    <option value="default" default>Link your message to...</option>
    <option value="google" default>Google</option>
    <option value="youtube">YouTube</option>
    <option value="urbandictionary">UrbanDictionary</option>
  </select>
                    <input className="btn btn-secondary btn-sm btn-block" type="submit" value="Submit" />
                    <input type="reset" className="btn btn-secondary btn-sm btn-block" value="Clear Form" />
                </form>
                <div className="clear_button">
                    <button className="btn btn-secondary btn-sm btn-block" onClick={() => this.clearMessages()}>Clear Message Log
        </button>
                </div>
            </div>);
    }

}


const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, { addMessage, clearMessages })(MessageForm);