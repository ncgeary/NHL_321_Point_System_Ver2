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
    const { items } = this.props.item;
    console.log({ items });

    var dig = this.props.item.items[0];
    console.log(dig);

    const columns = [{
      dataField: 'items[0].team',
      text: 'Team',
      sort: true
    }, {
      dataField: 'item.current_Rank',
      text: 'Current Rank',
      sort: true
    }, {
      dataField: 'item.new_Rank',
      text: '321 Rank',
      sort: true
    }];
    

    return (
      <BootstrapTable 
        keyField="team" 
        data={items} 
        columns={columns}
        striped
        hover />

      
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