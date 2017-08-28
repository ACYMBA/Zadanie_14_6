var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },


    increment: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('p', {}),
            React.createElement('bUTTON', {onClick: this.decrement, type: 'submit'}, "Dodawanie"),
            React.createElement('p', {}),
            React.createElement('bUTTON', {onClick: this.increment, type: 'submit'}, "Odejmowanie")
        );
    }
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },



    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('span', {}, 'Licznik drugi ' + this.state.counter)
        );
    }
});

var element =
    React.createElement(Counter,
    React.createElement(Counter2)
    );
ReactDOM.render(element, document.getElementById('app'));

