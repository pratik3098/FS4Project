import React, {Component} from 'react';
import './index.css';
import {Button, FormControl, FormLabel, TextField} from "@material-ui/core";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main">
                <p>
                    Cast Your Vote
                    <br/>
                    <span id="part">Results</span>
                </p>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Favourite candidate:</FormLabel>
                    <FormLabel id="answer" component="legend">Johnny Bravo: 4</FormLabel>
                    <FormLabel id="answer" component="legend">Thanos : 1</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Progress:</FormLabel>
                    <FormLabel id="answer" component="legend">Somewhat happy: 2</FormLabel>
                    <FormLabel id="answer" component="legend">Very happy: 1</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Age groups:</FormLabel>
                    <FormLabel id="answer" component="legend">19 or less: 5</FormLabel>
                    <FormLabel id="answer" component="legend">20 to 29: 0</FormLabel>
                    <FormLabel id="answer" component="legend">30 to 39: 1</FormLabel>
                    <FormLabel id="answer" component="legend">40 to 49: 0</FormLabel>
                    <FormLabel id="answer" component="legend">50 or more: 0</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Province:</FormLabel>
                    <FormLabel id="answer" component="legend">Ontario: 3</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Ideal room temperature:</FormLabel>
                    <FormLabel id="answer" component="legend">23 &#8451; : 19</FormLabel>
                    <FormLabel id="answer" component="legend">27 &#8451; : 2</FormLabel>
                    <FormLabel id="answer" component="legend">45 &#8451; : 1</FormLabel>
                </div>

            </div>
        )
    }
}

export default Index;
