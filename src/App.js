import React from 'react'
import List from './list'
import Details from './details'

function App() {
  const [detailsId, setDetils] = React.useState();
    return (
      <div>
        <List setDetils={setDetils}/>
        <Details id={detailsId}/>
      </div>
  );
}

export default App;
