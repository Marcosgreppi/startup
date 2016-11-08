import React from 'react';
import ReactDOM from 'react-dom';

let HelloWorld = React.createClass({
    render: function () {
        return (
            <div className="hello-world">
                <span>Hello World!</span>
            </div>
        );
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
