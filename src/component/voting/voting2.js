import 'date-fns';
import React, {Component} from 'react';
import './index.css';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {FormLabel, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = e => {
        // do to your work
    };

    render() {
        const handleDateChange = date => {
            // setSelectedDate(date);
        };
        return (
            <div id="main">
                <p>Cast Your Vote
                    <Link to="/voting/1"><span id="backHome">Back to start</span></Link>
                    <br/>
                    <span id="part">Part 2</span>
                </p>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <FormLabel id="question" component="legend">When is your birthday?</FormLabel>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label=""
                        format="MM/dd/yyyy"
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <br/><br/>

                <FormLabel id="question" component="legend">Which province do you reside in?</FormLabel>
                <br/>
                <FormControl variant="outlined" style={{width: 700}}>

                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        onChange={this.handleChange}
                        displayEmpty
                    >
                        <MenuItem value={10}>Alberta</MenuItem>
                        <MenuItem value={20}>British Columbia</MenuItem>
                        <MenuItem value={30}>Manitoba</MenuItem>
                        <MenuItem value={10}>New Brunswick</MenuItem>
                        <MenuItem value={20}>Newfoundland and Labrador</MenuItem>
                        <MenuItem value={30}>Nova Scotia</MenuItem>
                        <MenuItem value={10}>Northwest Territories</MenuItem>
                        <MenuItem value={20}>Nunavut</MenuItem>
                        <MenuItem value={30}>Ontario</MenuItem>
                        <MenuItem value={20}>Prince Edward Island</MenuItem>
                        <MenuItem value={30}>Quebec</MenuItem>
                        <MenuItem value={30}>Saskatchewan</MenuItem>
                    </Select>
                </FormControl>
                <br/><br/>
                <hr/>

                <Link id="link" to={"/voting/1"}>
                    <Button id="login-btn" variant="contained" color="primary" disabled={true}>
                        PREVIOUS
                    </Button>
                </Link>

                <Link id="link" to={"/voting/3"}>
                    <Button id="next-btn" variant="contained" color="primary" disabled={false}>
                        NEXT
                    </Button>
                </Link>
            </div>
        )
    }
}

export default Index;
