import React from 'react';

//create TodoItem component
export class TodoItem extends React.Component{
//custom function

    render(){
        return (
            <li>{this.props.task} <span className="item-delete">X</span></li>
        );
    }
}
