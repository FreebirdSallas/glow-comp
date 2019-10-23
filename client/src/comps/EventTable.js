import React from 'react';


const EventTable = props => {

  return (
    <table className="table table-striped" style={{ marginTop: 20 }} >
      <thead>
        <tr>
          <th>Description</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        {props.func}
      </tbody>
    </table>
  );
};

export default EventTable;
