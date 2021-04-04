import React from 'react'
import List from './listClasses'
import Details from './detailsClasses'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        id: null,
    }
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick (item) {
    this.setState({ id:item.id });
  }

  render(){
    return (
      <>
        <List handlePostClick={this.handlePostClick}/>
        <Details id={this.state.id}/>
      </>
    );
  }
}
export default App;
