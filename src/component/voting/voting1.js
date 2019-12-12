import React, {Component} from 'react';
import './index.css';
import {makeStyles} from '@material-ui/core/styles';
import {Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);

    }

    useStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(3),
        },
    }));

    render() {

        const handleChange = event => {
            // setValue(event.target.value);
        };

        return (
            <div id="main">
                <p>
                    Cast Your Vote
                    <br/>
                    <span id="part">Part 1</span>
                </p>

                <FormControl component="fieldset">
                    <FormLabel id="question" component="legend">Who is your favourute candidate?</FormLabel>
                    <RadioGroup
                        aria-label="candidate"
                        name="candidate"
                        onChange={handleChange}>
                        <FormControlLabel value="0" control={<Radio/>} label="Johnny Bravo"/>
                        <FormControlLabel value="1" control={<Radio/>} label="Satoshi Nakamoto"/>
                        <FormControlLabel value="2" control={<Radio/>} label="Thanos"/>
                    </RadioGroup>
                </FormControl>
                <br/><br/>
                <FormControl component="fieldset">
                    <FormLabel id="question" component="legend">how happy are you with the current progress?</FormLabel>
                    <RadioGroup
                        aria-label="progress"
                        name="progress"
                        onChange={handleChange}>
                        <FormControlLabel value="0" control={<Radio/>} label="Very unhappy"/>
                        <FormControlLabel value="1" control={<Radio/>} label="Somewhat unhappy"/>
                        <FormControlLabel value="2" control={<Radio/>} label="Neutral"/>
                        <FormControlLabel value="3" control={<Radio/>} label="Somewhat happy"/>
                        <FormControlLabel value="4" control={<Radio/>} label="Very happy"/>
                    </RadioGroup>
                </FormControl>
                <br/><br/>
                <hr/>

                <Link id="link" to={"/"}>
                    <Button id="login-btn" variant="contained" color="primary" disabled={true}>
                        PREVIOUS
                    </Button>
                </Link>
                <Link id="link" to={"/voting/2"}>
                    <Button id="next-btn" variant="contained" color="primary" disabled={false}>
                        NEXT
                    </Button>
                </Link>
            </div>
        )
    }
}

export default Index;
