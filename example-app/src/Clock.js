import React from 'react';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({date: new Date()});
    }

    clearTimer = () => {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <FormattedDate date={this.state.date}/>
                {/* <button onClick={this.clearTimer}>Reset</button> */}
            </div>
        )
    }
}

export default Clock;