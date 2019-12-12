import React, {Component} from 'react';
import './index.css';
import {FormLabel, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Slider} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const marks = [
            {
                value: 0,
                label: '0°C',
            },
            {
                value: 20,
                label: '20°C',
            },
            {
                value: 37,
                label: '37°C',
            },
            {
                value: 100,
                label: '100°C',
            },
        ];

        function valuetext(value) {
            return `${value}°C`;
        }

        function valueLabelFormat(value) {
            return marks.findIndex(mark => mark.value === value) + 1;
        }

        return (
            <div id="main">
                <p>Cast Your Vote
                    <Link to={"/voting/1"}><span id="backHome">Back to start</span></Link>
                    <br/>
                    <span id="part">Part 3</span>
                </p>

                <FormLabel id="question" component="legend">What is your ideal room temperature?</FormLabel>

                <Slider
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-restrict"
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
                <br/><br/>
                <hr/>
                <Link id="link" to={"/voting/2"}>
                    <Button id="login-btn" variant="contained" color="primary" disabled={true}>
                        PREVIOUS
                    </Button>
                </Link>

                <Link id="link" to={"/voting/summary"}>
                    <Button id="next-btn" variant="contained" color="primary" disabled={false}>
                        NEXT
                    </Button>
                </Link>
            </div>
        )
    }
}

export default Index;
