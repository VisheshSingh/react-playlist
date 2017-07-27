import React from 'react';
import ReactDOM from 'react-dom';

//Create component
class TodoComponent extends React.Component{
    render() {
        return (
            <div>
                <h1>Welcome to ReactJs</h1>
                <p>Here's an example of "props"</p>
                <p><strong>Player name: </strong>{this.props.player.name}</p>
                <p><strong>Game: </strong>{this.props.player.game}</p>
                <p><strong>Age: </strong>{this.props.player.age}</p>
            </div>
        );
    }
}

const myPlayer = {name: "Messi", game: "Soccer", age: "30"};

//propTypes are used for validation and documentation
TodoComponent.propTypes = {
    myPlayer: React.PropTypes.object
}

ReactDOM.render(<TodoComponent player={myPlayer}/>, document.getElementById('app'));
