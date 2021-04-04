import React from 'react'
import api from "./api";


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        api.getList().then(data => this.setState({ list:data }));
    }

    render(){
        return(
            <div>
                {this.state.list.map(item => (
                    <li key={item.id} onClick={()=> this.props.handlePostClick(item)}>
                        {item.id}-{item.title}
                    </li>
                ))}
            </div>
        )
    }
}

export default List;
