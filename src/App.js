import logo from './logo.svg';
import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import Fun1 from './Fun';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Snehitha', age: 20 },
      { id: '2', name: 'Pinky', age: 22 },
      { id: '3', name: 'cherry', age: 15 }
    ],
    otherState: 'some value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked');
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Pinky', age: 25 },
        { name: 'cherry', age: 15 }
      ]
    })
  }

  // nameChangeHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Snehitha', age: 20 },
  //       { name: event.target.value, age: 25 },
  //       { name: 'cherry', age: 23 }
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }
  render() {
    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
          {/* <Person name={this.state.persons[0].name} 
                      age={this.state.persons[0].age} />
              <Person name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      click={this.switchNameHandler.bind(this, 'Sneha')}
                      changed={this.nameChangeHandler}>My Hobbies: Cooking</Person>
              <Person name={this.state.persons[2].name} 
                      age={this.state.persons[2].age} /> */}

          {/* <Person name="Snehitha" age="22"/>
              <Person name="Pinky" age="20">My Hobbies: Cooking</Person>
              <Person name="cherry" age="23"/>  */}
        </div>
      )

    }
    return (
      <div>
        <Fun1 />

        <div className="App">
          <h1>Welcome to React JS</h1>
          <p>This is really working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Button</button>
          {/* onClick={() => this.switchNameHandler('Snehitha!')}>Switch Name</button> */}

          {/* <button onClick={this.switchNameHandler.bind (this, "Snehitha")}>Switch Name</button> */}
          {persons}
        </div>
        <div>
          <h3>DOM element</h3>
        </div>

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works?'))
  }
}

// function App() {
//   return (
//     <div>
//       <Header/>
//       <div className="App">
//         <h1>Welcome to React JS</h1>
//       </div>
//       <div>
//         <h3>DOM element</h3>
//       </div>
//     </div>
//   );
// }

// const App = props => {
//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: 'Snehitha', age: 20 },
//       { name: 'Pinky', age: 22 },
//       { name: 'cherry', age: 15 }
//     ],
//     otherState: "some other"
//   });

//   console.log(personState);

//   const switchNameHandler = () => {
//     //console.log('Clicked');
//     setPersonsState({
//       persons: [
//         { name: 'Sneha', age: 20 },
//         { name: 'Pinky', age: 25 },
//         { name: 'cherry', age: 15 }
//       ]
//     })
//   }
//   return (
//     <div>
//       <Header />

//       <div className="App">
//         <h1>Welcome to React JS</h1>
//         <p>This is really working</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Cooking</Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//       <div>
//         <h3>DOM element</h3>
//       </div>

//     </div>
//   );

// }

export default App;
