import React from 'react';
import AboutText from './AboutText';
import MessagesPage from './MessagesPage';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isHomePage: true,
            apiResponse: "" ,
        entered: false};
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

    renderPage() {
        let customHeader = (
            <div>
                <header>
                    <nav>
                        <span><button type="button" className="btn btn-secondary btn-sm" onClick={this._updateHomePage}>HOME</button>|<button type="button" className="btn btn-secondary btn-sm"  onClick={this._updateAboutPage}>ABOUT</button></span>
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

    renderWelcome(){
        return (<div className="welcomeContainer">
            <div className="welcomeInfo">
            <h1 className="website_title">CPSC436I Message Logger</h1>
            <h4 className="website_info">Developed by Martin Palanca as part of the Introduction to Industry Skills (CPSC436I) course at the University of British Columbia</h4>
            <button className="enter_button" onClick={() => this.enterSite()}>Start</button>
            </div>
        </div>);
    }

    enterSite(){
        this.setState({entered:true});
    }

    render(){
        if (this.state.entered === true){
            return <div className="container">{this.renderPage()}</div>;
        } else {
            return <div className="container">{this.renderWelcome()}</div>;
        }
    }
}


