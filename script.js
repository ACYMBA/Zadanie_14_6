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
    
    shouldComponentUpdate() {
       console.log('shouldComponentUpdate')
    },
    componentWillMount() {
       console.log(' componentWillMount')
    },
    componentDidMount() {
       console.log(' componentDidMount')
    },
    componentWillUnmount() {
       console.log(' componentWillUnmount')
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



var element = (
        React.createElement('div', {},
        React.createElement(Counter, {}),
        React.createElement(Counter, {}),
        React.createElement(Counter, {}),
        React.createElement(Counter, {})
       )
);
ReactDOM.render(element, document.getElementById('app'));

