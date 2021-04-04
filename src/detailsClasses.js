import React from 'react'
import api from "./api";


class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            details: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) { 
            api.getDetails(this.props.id).then((data) => {
                const detailsList = [];
                detailsList.push(data);
                this.setState({ details:detailsList });
            });
        }
    }
    

    render(){
        return (
            <div>
                {this.state.details.map(item => (
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
}

export default Details;
