import React, { Component } from 'react';
import Fun3 from './Fun3';
import './Fun.css';

class Fun2 extends Component {
   
    state = {
        Location: [
            { Area: 'Nellore', State: 'Andhra Pradesh' },
            { Area: 'Chennai', State: 'Tamil Nadu'},
            //{ Area: 'Banglore', State: 'Karnataka'}
        ],
        otherState: 'some value',
    }
    
    render() {

        return (
            <div className="Fun2">
                <Fun3 Area={this.state.Location[0].Area} State={this.state.Location[0].State}/>
                <Fun3 Area={this.state.Location[1].Area} State={this.state.Location[1].State}/>
                {/* <Fun3 Area={this.state.Location[2].Area} State={this.state.Location[2].State}/> */}

            </div>
        );
    }
}
export default Fun2;