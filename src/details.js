import React from 'react'
import api from "./api";

function Details ({id}) {
    const [details, setDetils] = React.useState([]);
    
    React.useEffect(() => {
        api.getDetails({id}).then((data) => {
        
        const detailsList = [];
        detailsList.push(data);
        
        setDetils(detailsList);
        })
    }, [id]);

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
