import List from './list'

function App() {
  return (
    <div>
      {List.map(item => (
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
