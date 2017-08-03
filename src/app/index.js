import React from 'react';
import ReactDOM from 'react-dom';

import { TodoItem } from './todoItem';
import { AddItem } from './addItem';
import { About } from './about';

//react-router-dom
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

//css
require('./css/index.css');

//Create component
class TodoApp extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={TodoComponent}></Route>
                    <Route path='/about' component={About}></Route>
                </div>
            </Router>
        );
    }
}

class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: ['eat', 'sleep', 'conquer', 'repeat']
        }
    }
//Events
    delete(item){
        var updatedTasks = this.state.tasks.filter((val, index) => {
            return item !== val;
        });
        this.setState({
            tasks: updatedTasks
        });
    }

    add(item){
        var updatedTasks = this.state.tasks;
        updatedTasks.push(item);
        this.setState({
            tasks: updatedTasks
        });
    }
//Lifecycle methods:
    componentWillMount(){
        console.log("Component will mount before render");
    }

    componentDidMount(){
        console.log("Component mounted after render");
    }

    componentWillUpdate(){
        console.log("Component updated...");
    }

    render() {
        var tasks = this.state.tasks;
        tasks = tasks.map(function(task, id) {
            return (
                <TodoItem task={task} key={id} onDelete={this.delete.bind(this)}/>
            );
        }.bind(this));

        return (
                <div id="todo-list">
                    <h2>Todo list for the day:</h2>
                    <ul>
                        {tasks}
                    </ul>
                    <AddItem onAdd={this.add.bind(this)}/>
                </div>
            );
    }//render
}

ReactDOM.render(<TodoApp/>, document.getElementById('app'));
