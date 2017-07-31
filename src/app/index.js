import React from 'react';
import ReactDOM from 'react-dom';
import { TodoItem } from './todoItem';
//Create component
class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: ['Get up early', 'Mind your work', 'eat', 'sleep', 'repeat'],
            age: props.age,
            tasks: ['eat', 'sleep', 'conquer', 'repeat']
        }
    }

    //custom functions
    clicked() {
        console.log("you clicked me!");
    }

    makeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
//Changing the state's age
        var ager = setTimeout(function() {
            this.setState({age:30});
        }.bind(this),3000);
//Nesting a component
        var tasks = this.state.tasks;
        tasks = tasks.map(function(task, id) {
            return (
                <TodoItem task={task} key={id} />
            );
        });

        return (
            <div className="container">
                <div>
                    <h1>Welcome to ReactJs</h1>
                    <h3>Here's an example of "props"</h3>
                    <p><strong>Player name: </strong>{this.props.player.name}</p>
                    <p><strong>Game: </strong>{this.props.player.game}</p>
                    <p><strong>Age: </strong>{this.state.age}</p>
                    <button onClick={this.makeOlder.bind(this)} className="btn btn-success">Make Older!</button>
                </div>
                <div id="to-do">
                    <h3>Here's an example of "state"</h3>
                    <ul>
                        <li>This is going to change in 3 secs: {this.state.age}</li>
                        {this.state.todos.map((todo, id) => <li key={id}>{todo}</li>)}
                        {/*
                            <li>{this.state.todos[0]}</li>
                            <li>{this.state.todos[1]}</li>
                            <li>{this.state.todos[2]}</li>
                            <li>{this.state.todos[3]}</li>
                            <li>{this.state.todos[4]}</li>
                        */}
                    </ul>
                </div>
                <div>
                    <h3>Nested component:</h3>
                    <button onClick={this.clicked} className="btn btn-primary">Click</button>
                    <ul>
                        {tasks}
                    </ul>
                </div>
            </div>
        );
    }//render
}

const myPlayer = {name: "Messi", game: "Soccer", age: 30};

//propTypes are used for validation and documentation
TodoComponent.propTypes = {
    myPlayer: React.PropTypes.object
}



ReactDOM.render(<TodoComponent player={myPlayer}/>, document.getElementById('app'));
