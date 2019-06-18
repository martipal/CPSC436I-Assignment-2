import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

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
        const options = {
            method: 'POST'
        };

        fetch("http://localhost:9000/messages/clearAll", options);
        this.reload();
    }

    sendMessageWithPOST(newMessage) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "message": newMessage })
    };

    fetch("http://localhost:9000/messages", options);
    this.render();
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

export default connect(mapStateToProps, { addMessage })(MessageForm);