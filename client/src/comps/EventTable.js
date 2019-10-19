import React, { Component } from "react";
import {
    MDBContainer,
    MDBTable,
    MDBTableHead,
    MDBTableBody
} from "mdbreact";

const EventTable = props => {
    const columns = [
        {
            label: '#',
            field: 'id',
            sort: 'asc'
        },
        {
            label: "Date",
            field: 'date',
            sort: 'asc'
        },
        {
            label: 'Kind',
            field: 'kind',
            sort: 'asc'
        }
    ];
   let rows = [];
   for(var i = 0; i < props.rows.length; i++){
       var obj = {};
       obj.id = i+1;
       obj.date = props.rows[i].date;
       obj.kind = props.rows[i].massType;
       rows.push(obj);
   }
  
    console.log(props.rows)

    return(
        <div>
            <MDBTable >
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows}/>
            </MDBTable>
        </div>
    )

}

export default EventTable;