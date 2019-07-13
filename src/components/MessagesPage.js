import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

let NUMBER_OF_MESSAGES = 10;

let scrollingMessages = true;

export default class MessagesPage extends React.Component {

    constructor() {
        super();
        this.state = {
            numberOfMessagesDisplayed: 10,
            scrollingMessages: true
        };
        this._collapseMessages = this._collapseMessages.bind(this);
        this._expandMessages = this._expandMessages.bind(this);
        this._toggleScroll = this._toggleScroll.bind(this);
    }

    _collapseMessages() {
        this.setState({ numberOfMessagesDisplayed: 10 });
    }

    _expandMessages() {
        this.setState({ numberOfMessagesDisplayed: 100 });
    }

    _toggleScroll() {
        if (this.state.scrollingMessages){
        this.setState({ scrollingMessages: false });
        } else {
            this.setState({ scrollingMessages: true });
        }
    }

    render() {
        let scrollButton;

        if (this.state.scrollingMessages){
            scrollButton = (<button id="stop_movement" className="button_stuff" onClick={this._toggleScroll}> Stop Scroll
            </button>);
        } else {
            scrollButton = (<button id="stop_movement" className="button_stuff" onClick={this._toggleScroll}> Resume Scroll
            </button>);
        }

        let expandCollapseButton;
        if (this.state.numberOfMessagesDisplayed === 10){
            expandCollapseButton = (<button id="expand_button" className="button_stuff" onClick={this._expandMessages}> Expand</button>);
        } else {
            expandCollapseButton = (<button id="collapse_button" className="button_stuff" onClick={this._collapseMessages}> Collapse</button>);
        }

        return (<div>
            <MessageForm />
            <hr></hr>
            <MessageList numberOfMessages={this.state.numberOfMessagesDisplayed} scrollingMessages={this.state.scrollingMessages} />
            <div>
                {scrollButton}
                {expandCollapseButton}
            </div>
        </div>);
    }

}