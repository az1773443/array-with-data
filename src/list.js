import React from 'react'
import Details from './details'
function List() {
    const [list, setList] = React.useState([]);
    const [error, setError] = React.useState('');
    const [detailsId, setDetils] = React.useState();
    const api = {
        getList: () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
        }

    }

    React.useEffect(() => {
        api.getList().then((data) => {
        const preparedList = data.filter(item => item.id % 2 !==0)
        .sort((a, b) => b.id - a.id)
        .map((item) => {
            const [ first ] = item.title.split(' ');
    
        return { ...item, title: first};
        
        })
        setList(preparedList);
        })
        .catch(err => setError("Произошла ошибка сервера!!!"));
    }, []);

    

    return (
        <div>
            <div>{error}</div>
            {list.map(item => (
            <li key={item.id} onClick={() => setDetils(item.id)}>
              {item.title}
            </li>
            ))}
            <Details detailsId={detailsId} />
        </div>

    )
}


export default List

