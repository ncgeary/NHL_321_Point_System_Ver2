import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next';
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
    console.log({items});

    const columns = [{
      dataField: 'Team',
      text: 'Team'
    }, {
      dataField: 'Current_Rank',
      text: 'Current Rank'
    }, {
        dataField: 'New_Rank',
        text: 'Current Rank'
    }];
    

    return (
      <Container>
        <BootstrapTable keyField='Team' data={items} columns={columns} />

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