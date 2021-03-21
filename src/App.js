import React from 'react'
import api from './api'

function App() {
  const [list, setList] = React.useState([]);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    api.getList().then((data) => {
      const preparedList = data.filter(item => item.userId % 2 !==0)
      .sort((a, b) => b.userId - a.userId)
      .map((item) => {
        const [ first ] = item.title.split(' ');
        const body5 = item.body.split(' ',5).join();
  
      return { ...item, title: first, body: body5};
    
      })
      setList(preparedList);
    })
      .catch(err => setError("Произошла ошибка сервера!!!"));
  }, []);

    return (
      <div>
        {<div>{`${error}`}</div>}
        {list.map(item => (
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
