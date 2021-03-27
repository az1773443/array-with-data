import React from 'react'

function Details () {
    const [details, setDetils] = React.useState([]);

    const api = {
        getDetails: () => {
            return fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then(response => response.json())
        }

    }

    React.useEffect(() => {
        api.getDetails().then((data) => {
        const detailsList = [];
        detailsList.push(data);
        
        setDetils(detailsList);
        })
    }, [details]);

    return (
        <div>
            {details.map(item => (
                <ul key={item.id}>
                    <li>
                    {item.id}
                    </li>
                    <li>
                    {item.title}
                    </li>
                    <li>
                    {item.body}
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Details
