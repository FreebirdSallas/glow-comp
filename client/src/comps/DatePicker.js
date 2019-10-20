import React from 'react';
import DateTimePicker from 'react-datetime-picker';

const DatePicker = props => {
    state = {
        date: new Date(),
      }
    
      onChange = date => this.setState({ date })
    
      render() {
        return (
          <div>
            <DateTimePicker
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        );
      }
}