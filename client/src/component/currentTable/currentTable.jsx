import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'reactstrap';



class CurrentTable extends Component {

  componentDidMount() {
    this.props.getItems();  
  }


  render() {
    
    // let {items} = this.props.item || {};
    // console.log({items});

    
    const dig = this.props.item.items[0] || {};
    
    
    let teams = dig.team || {};
    let current_Ranks = dig.current_Rank || {};
    let new_Ranks = dig.new_Rank || {};
    let new_Records = dig.new_Record || {};
    let current_Pointss = dig.current_Points || {};
    let pointss = dig.points || {};
    let conferences = dig.conference || {};
    let divisions = dig.division || {};

    const keepdig = Object.values(teams);
    // console.log(keepdig);
    // console.log(Object.values(teams));

    // let data = Object.values(Object.keys(teams))||{};
    // console.log(data); 
    
    
    
    // react - bootstrap - table - next
    const columns = [
      {
      dataField: 'teams',
      text: 'Team',
      sort: true,
      formatter: (cellContent, row, rowIndex) => (
        Object.values(teams)[rowIndex]
        
      )      
    }, {
      dataField: 'current_Rank',
      text: 'Current Rank',
      sort: true,
      formatter: (cellContent, row, rowIndex) => (
        Object.values(current_Ranks)[rowIndex]
      )      
    }, {
      dataField: 'new_Rank',
      text: '321 Rank',
      sort: true,
      formatter: (cellContent, row, rowIndex) => (
        Object.values(new_Ranks)[rowIndex]
      )
      }, {
        dataField: 'new_Record',
        text: 'Record',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(new_Records)[rowIndex]
        )
      }, {
        dataField: 'current_Points',
        text: 'Current Point Total',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(current_Pointss)[rowIndex]
        )
      }, {
        dataField: 'points',
        text: 'New Point Total',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(pointss)[rowIndex]
        )
      }, {
        dataField: 'conference',
        text: 'Conference',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(conferences)[rowIndex]
        )
      }, {
        dataField: 'division',
        text: 'Division',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(divisions)[rowIndex]
        )
      }];
    

    return (
      
      <Container>
        <BootstrapTable
          keyField="teams"
          data={keepdig}
          columns={columns}
          striped  
          hover />   

      </Container>
      
               
    )
  }
}

CurrentTable.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  }

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps,{ getItems })(CurrentTable);