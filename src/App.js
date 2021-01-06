
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      thingList: [
        { id: 1, name: "Orange", description: "round" },
        { id: 2, name: "Banana", description: "curved" },
      ],
      randomThing: 'blueberry',
      recentThingAdded: '',
    }
    this.thingHandler = this.thingHandler.bind(this);
  }
  thingHandler(thing) {
    alert('you inputted ' + thing.name);
    const addedThing = this.state.thingList
    addedThing.push({id: '', name: thing.name, description: '!'})

    this.setState({
      thingList: addedThing,
      recentThingAdded: thing
    })
  }

  render(){
    return (
      <div className="App">
        <h1> thing list</h1>
        <Header recentThingAdded={this.state.recentThingAdded} counter={this.state.thingList.length} />
      <main>
        <ThingList thingList = {this.state.thingList} thingCreate = {this.thingHandler} />
          {/* <Thing /> */}
      </main>
      <Footer text="Welzien" />
      </div>
    )
  }
}
class FormThing extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: 'name a thing',
      typeOfThing: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    const changedName = event.target.value
    this.setState({
      name: changedName
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.thingCreate(this.state);
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' value={this.state.name} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


class ThingList extends React.Component {
  render(){
    return (
      <div>
        <FormThing thingCreate={this.props.thingCreate} />
        <ul>
          {this.props.thingList.forEach(thingList => (<Thing key={thingList.id} name={thingList}/>))}
        </ul>
      </div>
    )
  }
}
// function ThingList(props){
//   return(
//     <>
//     <h2> list of things:</h2>
//     <ul>
//       {props.thingList.forEach(thingList => <Thing name={thingList} key={thingList.id}/>)}
//       {/* <Thing name="bob" key= 'h' /> */}
//     </ul>
//     <FormThing thingCreate={props.thingCreate}/>
//     </>
//   )
// }

function Thing(props){
  return <li> the thing you added is a {props.name}</li>
}

function Header(props){
  return(
    <>
    <h3> things count: {props.counter}</h3>
    <h3> most recent thing is: {props.recentThingAdded.name}</h3>
    </>
  )
}
function Footer(props){
  return(
    <footer>
      <small> this is the footer for things {props.text}</small>
    </footer>
  );
}

export default App;
