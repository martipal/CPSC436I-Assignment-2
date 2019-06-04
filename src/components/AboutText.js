import React, { Component } from 'react';


export class AboutText extends React.Component {

    render() {
        const aboutTitle = <h2>About This Page</h2>;
        const aboutText = (
            <div>
                <p>These webpages were created by Martin Palanca, a 4th Year BCS Computer Science student, as part of Assignment 1 for the <i>CPSC436I (Introduction to Industry Skills)</i>
                    course at the University of British Columbia. The primary functionality of this site allows users to:<br></br>
                
                        <b>1) Add custom messages into a Message Log </b>. <br></br>
                        Messages are ordered from <i>top to bottom</i> from <i>newest
            to oldest</i>. Only the <i>ten</i> most recently entered messages will be viewable on the default view. All
          messages can be viewed using the "Expand" buttom at the bottom of the log. <br></br>
                    
                        <b>2) Clear the existing Message Log.</b><br></br>
                        Users can also clear the existing Message Log using the "Clear Message Log" button.<br></br>
                    
                        <b>3) Clear the input form.</b><br></br>
                        Users can clear existing input from the form field with the "Clear Form" button.<br></br>
                    
                        <b>4) Open extended searches for text inputs on Google and Youtube.</b><br></br>
                        Right-clicking on a message within the message log will open a pop-up window containing a search for that message in YouTube. Left-clicking on a message within the log will open a pop-up window containing a search for that message in Google. <br></br>
                        </p>
            </div>);

        return (<div>
            {aboutTitle}
            {aboutText}
        </div>
        )
    }

}

export default AboutText;