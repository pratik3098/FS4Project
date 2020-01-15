import React, {Component} from 'react';
import './index.css';
import {TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Index extends Component {
   
    constructor(props) {
        super(props);
        this.mystate=false
    }

    
    render() {
      
        return (
            <div id="main">
                <p>Cast Your Vote<br/>
                    <span id="description">To begin your voting application, choose a username:</span>
                </p>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={event=>{ 
                    console.log(event.target.value)
                    window.localStorage.setItem('username', event.target.value)
                    this.mystate=false
                }} />
                <br/>
                <Link id="link" to={"/voting/1"}>
                    <Button id="login-btn" variant="contained" color="primary" disabled={this.mystate}>
                        CONTINUE
                    </Button>
                </Link>
            </div>
        )
    }


}

export default Index;
