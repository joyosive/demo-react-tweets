import React from 'react';
import Moment from 'react-moment';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().toISOString()
        }
    }

    render() {
        return (
            <Moment format="hh:mm:ss">
                {this.state.currentDate}
            </Moment>
        );
    }
}

export default Timer;
