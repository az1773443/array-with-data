import List from './list'
import api from './api'
function App() {
  api.getList()
  const listFilter = List.filter(item => item.userId % 2 !==0)
    .sort((a, b) => b.userId - a.userId)
    .map((item) => {
      const [ first ] = item.title.split(' ');
      const body5 = item.body.split(' ',5).join();
  
      return { ...item, title: first, body: body5};
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
