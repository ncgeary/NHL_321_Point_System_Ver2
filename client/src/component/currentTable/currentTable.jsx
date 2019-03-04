import React, { Component } from 'react'
import { 
  BootstrapTable,
  TableHeaderColumn } from 'react-bootstrap-table';

const nhlconference = {
  0: 'All NHL',
  1: 'Eastern',
  2: 'Western'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

class CurrentTable extends Component {
  render() {
    return (
      <div>

        <BootstrapTable data={products}>
          <TableHeaderColumn
            dataField='quality'
            filterFormatted
            dataFormat={enumFormatter}
            formatExtraData={nhlconference}
            filter={{ type: 'SelectFilter', options: nhlconference }}>Conference</TableHeaderColumn>

          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>

          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>

          
        </BootstrapTable>
        
      </div>
    )
  }
}


export default CurrentTable;