import React from 'react'
import List from './list'
import Details from './details'

function App() {
  const [detailsId, setDetils] = React.useState();
    return (
      <>
        <List setDetils={setDetils}/>
        <Details id={detailsId}/>
      </>
  );
}

export default App;
