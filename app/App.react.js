/** @jsx React.DOM */

var React = require('react');

// Export the main App component
module.exports = React.createClass({

    // Set the initial component state
    getInitialState: function(props){

        props = props || this.props;

        // Set initial application state using props
        return {
            // set state variables here
        };

    },

    componentWillReceiveProps: function(newProps, oldProps){
        this.setState(this.getInitialState(newProps));
    },

    // Called directly after component rendering, only on client
    componentDidMount: function(){

        // Preserve self reference
        var self = this;

        // Initialize socket.io
        var socket = io.connect();

        socket.on('ioEvent', function (data) {
            // Add new data function
            // self.add(data);
        });

    },

    // Render the main app component
    render: function(){

        return (
                <div className="react-app">

                </div>
        )

    }

});
