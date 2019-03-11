import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types'
import { 
  BootstrapTable,
  TableHeaderColumn } from 'react-bootstrap-table';
import { Container } from 'reactstrap';


// function enumFormatter(cell, row, enumObject) {
//   return enumObject[cell];
// 

class CurrentTable extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {items}= this.props.item;

    return (
      <Container>
        <BootstrapTable printable data={items} striped hover>

          <TableHeaderColumn dataField='Team' width='250' dataAlign='center' dataSort isKey>Team</TableHeaderColumn>
          <TableHeaderColumn dataField='Current_Rank' width='150' dataAlign='center'>Current Rank</TableHeaderColumn>
          <TableHeaderColumn dataField='New_Rank' width='150' dataAlign='center'>321 Rank</TableHeaderColumn>
          <TableHeaderColumn dataField='Wins' width='75'dataAlign='center'>Wins</TableHeaderColumn>
          <TableHeaderColumn dataField='Loss' width='75' dataAlign='center'>Loss</TableHeaderColumn>
          <TableHeaderColumn dataField='Overtime_Loss' width='150' dataAlign='center'>Overtime Loss</TableHeaderColumn>
          <TableHeaderColumn dataField='Shoot_Out_Wins' width='150' dataAlign='center'>Shoot Out Wins</TableHeaderColumn>
          <TableHeaderColumn dataField='Overtime_Wins' width='150' dataAlign='center'>Overtime Wins</TableHeaderColumn>
          <TableHeaderColumn dataField='True_Wins' width='100' dataAlign='center'>True Wins</TableHeaderColumn>
          <TableHeaderColumn dataField='New_Record' width='150' dataAlign='center'>New Record</TableHeaderColumn>
          <TableHeaderColumn dataField='Points' width='100' dataAlign='center'>Points</TableHeaderColumn>
          <TableHeaderColumn dataField='Current_Points' width='150' dataAlign='center'>Current Points</TableHeaderColumn>


        </BootstrapTable>

      </Container>
      
    )
  }
}

CurrentTable.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps,{ getItems })(CurrentTable);