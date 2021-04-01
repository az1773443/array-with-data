import React from 'react'
import api from "./api";

function List({setDetils}) {
    const [list, setList] = React.useState([]);
    const [error, setError] = React.useState([]);

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
        </div>

    )
}


export default List
