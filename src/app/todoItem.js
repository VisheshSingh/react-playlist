import React from 'react';
require('./css/todoItem.css');
//create TodoItem component
export class TodoItem extends React.Component{
//custom function
    handleClick(){
        this.props.onDelete(this.props.task);
    }
    render(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name"> {this.props.task} </span>
                    <span onClick={this.handleClick.bind(this)} className="item-remove">X</span>
                </div>
            </li>

        );
    }
}
