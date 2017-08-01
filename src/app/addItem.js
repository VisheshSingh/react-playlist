import React from 'react';
require('./css/additem.css');

export class AddItem extends React.Component{
    //Custom Functions
    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newitem.value);
        this.refs.newitem.value="";
    }

    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" required ref="newitem"/>
                <input type="submit" value="Add todo"/>
            </form>
        );
    }
}
