import List from './list'

function App() {
  const listFilter = List.filter(item => {
    if(item.userId % 2 !==0){
      return item;
    }
  })
  return (
    <div>
      {listFilter.map(item => (
        <li key={item.id}>
          <h3>
            {item.title}
          </h3>
          <p>
            {item.body}
          </p>
        </li>
      ))}
    </div>
  );
}

export default App;
