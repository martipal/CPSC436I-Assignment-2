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
        this.sendMessageWithPOST(newMessage);
        this.reload();
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
            if (data === "deleted"){
                this.props.clearMessages();
                console.log(data);
            }
        });
    }

    sendMessageWithPOST(newMessage) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "message": newMessage })
    };

    fetch("http://localhost:9000/messages", options).then(response => response.json()).then(data => {
        this.props.addMessage(data.message);
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