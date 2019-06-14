import React from 'react';
import AboutText from './AboutText';
import MessagesPage from './MessagesPage';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isHomePage: true,
            apiResponse: "" };
        this._updateHomePage = this._updateHomePage.bind(this);
        this._updateAboutPage = this._updateAboutPage.bind(this);
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    _updateHomePage = () => {
        this.setState({ isHomePage: true });
    }

    _updateAboutPage = () => {
        this.setState({ isHomePage: false });
    }

    render() {
        let customHeader = (
            <div>
                <div>
                    <h1 id="page_title">CPSC436I Message Logger</h1>
                    <hr></hr>
                    <link rel="stylesheet" type="text/css" href="index.css" />

                </div>
                <header>
                    <nav>
                        <span><button className="nav_button" id="homeButtom" onClick={this._updateHomePage}>HOME</button>|<button className="nav_button" id="aboutButton" onClick={this._updateAboutPage}>ABOUT</button></span>
                    </nav>
                </header>
                <hr></hr>
            </div>
        );

        let body;

        if (this.state) {
            if (this.state.isHomePage === false) {
                body = (<div><AboutText /></div>);
            } else {

                body = (<div>
                    <MessagesPage />
                </div>);
            }
        } else {
            body = (<div>
                <MessagesPage />
            </div>);
        }

        return (
            <div>
            <p className="App-intro">;{this.state.apiResponse}</p>
                <div>{customHeader}</div>
                <div>{body}</div>
            </div>
            
        );

    }
}


