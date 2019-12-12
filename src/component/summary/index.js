import React, {Component} from 'react';
import './index.css';
import {Button, FormControl, FormLabel, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";
import {DoneAll} from '@material-ui/icons';

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
                    <span id="part">Summary</span>
                </p>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Who is your favourute candidate?</FormLabel>
                    <FormLabel id="answer" component="legend">Satoshi Nakamoto</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">How happy are you with the current progress?</FormLabel>
                    <FormLabel id="answer" component="legend">Very happy</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">When is your birthday?</FormLabel>
                    <FormLabel id="answer" component="legend">8/14/1998</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">Which province do you reside in?</FormLabel>
                    <FormLabel id="answer" component="legend">Ontario</FormLabel>
                </div>

                <div className="questionBox">
                    <FormLabel id="question" component="legend">What is your ideal room temperature?</FormLabel>
                    <FormLabel id="answer" component="legend">54 &#8451;</FormLabel>
                </div>

                <div className="form">
                    <TextField className="form-input" id="outlined-basic"
                               label="Donate ETH to your candidate (optional)" variant="outlined"/><br/><br/>
                    <TextField className="form-input" id="outlined-basic" label="Donate ETH to charity (optional)"
                               variant="outlined"/>

                    <center style={{marginTop: 8}}>
                        <Link id="link" to="/results">
                            <Button
                                id="castbtn"
                                variant="contained"
                                color="primary"
                                startIcon={<DoneAll/>}
                                disabled={false}>
                                CAST VOTES
                            </Button>
                        </Link>
                        <br/>
                        <Link id="link" to="/voting/3">
                            <Button id="login-btn" variant="contained" color="default" disabled={false}>
                                GO BACK
                            </Button>
                        </Link>
                    </center>

                </div>
            </div>
        )
    }
}

export default Index;
