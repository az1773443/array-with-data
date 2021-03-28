import React from 'react'

function Details (props) {
    const [details, setDetils] = React.useState([]);
    
    const api = {
        getDetails: () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
                .then(response => response.json())
        }

    }

    React.useEffect(() => {
        api.getDetails().then((data) => {
        
        const detailsList = [];
        detailsList.push(data);
        
        setDetils(detailsList);
        })
    }, [props.id]);

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
