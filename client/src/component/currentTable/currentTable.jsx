import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next';
// import { Container } from 'reactstrap';


// function enumFormatter(cell, row, enumObject) {
//   return enumObject[cell];
// 

class CurrentTable extends Component {

  componentDidMount() {
    this.props.getItems();    
  }


  render() {
    const {items}= this.props.item;
    console.log({items});

    const columns = [{
      dataField: 'item.ABB',
      text: 'Team',
      sort: true
    }, {
        dataField: 'item.Team',
        text: 'Team',
        sort: true
      }, {
        dataField: 'items.items[""0""].Current_Rank',
      text: 'Current Rank',
      sort: true
    }, {
        dataField: 'items.items[""0""].New_Rank',
        text: '321 Rank',
        sort:true
    }];
    

    return (
      <BootstrapTable keyField="Team" data={items} columns={columns} />

      
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