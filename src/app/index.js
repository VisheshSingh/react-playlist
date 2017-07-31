import React from 'react';
import ReactDOM from 'react-dom';
import { TodoItem } from './todoItem';
require('./css/index.css');
//Create component
class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: ['eat', 'sleep', 'conquer', 'repeat']
        }
    }

    delete(item){
        var updatedTasks = this.state.tasks.filter((val, index) => {
            return item !== val;
        });
        this.setState({
            tasks: updatedTasks
        });
    }

    render() {
        var tasks = this.state.tasks;
        tasks = tasks.map(function(task, id) {
            return (
                <TodoItem task={task} key={id} onDelete={this.delete.bind(this)}/>
            );
        }.bind(this));

        return (
            <div className="container">
                <div id="todo-list">
                    <p>Todo list for the day:</p>
                    <ul>
                        {tasks}
                    </ul>
                </div>
            </div>
        );
    }//render
}

ReactDOM.render(<TodoComponent/>, document.getElementById('app'));
