import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Fun1 from './Fun1';
import Demo from './Login';
import Demo1 from './Dashboard';
import Alert1 from './Alert';
import Navigation from './Navbar';
import Carousel1 from './Carousel';
import Card1 from './Card';
import Accordion1 from './Accordion';
import Breadcrumb1 from './Breadcrumb';
import Progress1 from './Progress';
import './Fun.css';


class Fun extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         person: [
    //             {name: 'Snehitha', id: 51897470 },
    //             {name: 'Pinky', id: 51897471 },
    //             {name: 'Cherry', id: 51897472 }
    //         ]   
    //     }
    // }
    state = {
        person: [
            { name: 'snehitha', id: 51897470 },
            { name: 'Pinky', id: 51897471 },
            { name: 'cherry', id: 51897471 }
        ],
        otherState: 'some value',
        showPersons: false
    }
    switchName = () => {
        //console.log('Clicked');
        this.setState({
            person: [
                { name: 'sneha Reddy', id: 51897470 },
                { name: 'Pinky', id: 51897480 },
                { name: 'Charitha cherry', id: 51897490 }
            ]
        })
    }
    render() {
        //const {name, id} = this.state;

        return (
            <div className="Fun">
                <Navigation /> 
                
                <Alert1 />
                <Carousel1 />
                <Card1 />
                <Accordion1 />
                <Breadcrumb1 />
                {/* <Demo /> */}
                <Progress1 />
                
                {/* <Demo1 /> */}
                {/* <h1>Login Page</h1>
                <Button variant="primary" size="small">Login</Button>{' '} */}

                 








                {/* <button onClick={this.switchName}>Click Me</button>
                <h2>Personal Details</h2>
                <Fun1 
                     name={this.state.person[0].name} 
                     id={this.state.person[0].id} />
                <Fun1 
                     name={this.state.person[1].name} 
                     id={this.state.person[1].id}
                     click={this.switchName.bind(this, 'Sneha')} ></Fun1>
                <Fun1 
                     name={this.state.person[2].name} 
                     id={this.state.person[2].id} /> */}
            </div>
        );
    }
}
export default Fun;