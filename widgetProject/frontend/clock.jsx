import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render () {
    let hours = this.state.date.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = this.state.date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = this.state.date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    let day = this.state.date.getDay();
    let weekday = ['Sunday', "Monday", "Tuesday",'Wednesday' ,'Thursday' ,'Friday' ,'Saturday' ];
    let month = this.state.date.getMonth();
    let months = ['January', "February", "March",'April' ,'May' ,'June' ,'July', 'August', 'September', 'October', 'November', 'December' ];
    return (
        <div>
        <h1 className='clockTitle'>Clock</h1>
        <div className='clock'>
        <p><h1>TIME:</h1>
        <h1>{hours}:{minutes}:{seconds}PDT</h1>
        </p>
        <p>
        <h1>DATE:</h1>
        <h1>{weekday[day]} {months[month]}, {this.state.date.getDate()} 2018</h1>
        </p>
        </div>
      </div>
    );
  }


  tick () {
    const date = new Date();
    this.setState({date});
  }

  componentDidMount () {
    console.log('here');
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.handle);
    this.handle = 0;
  }
}


export default Clock;
