import React from 'react';
import ReactDOM from 'react-dom';

//Create component by React create class method
var TodoComponent = React.createClass({
    render() {
        return (
            <h1>Welcome to ReactJs</h1>
        );
    }
});

ReactDOM.render(<TodoComponent/>, document.getElementById('app'));
