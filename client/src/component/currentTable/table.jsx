import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types'
import { Container } from 'reactstrap';



class Table extends Component {

  componentDidMount() {
    this.props.getItems();    
  }


  render() {

    // let items = this.props.item || {};
    let dig = this.props.item.items[0] || {};
    console.log(dig);

    // let teams = dig.team || {};
    // let current_Ranks = dig.current_Rank || {};
    // let new_Ranks = dig.new_Rank || {};
    // let new_Records = dig.new_Record || {};
    // let current_Pointss = dig.current_Points || {};
    // let pointss = dig.points || {};
    // let conferences = dig.conference || {};
    // let divisions = dig.division || {};

    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Current Rank</th>
              <th>321 Rank</th>
              <th>Record</th>
              <th>Current Point Total</th>
              <th>New Point Total</th>
              <th>Conference</th>
              <th>Division</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(dig).map(row => (
                <tr>
                  <td>{row.team}</td>
                  <td>{row.current_Rank}</td>
                  <td>{row.new_Rank}</td>
                  <td>{row.new_Record}</td>
                  <td>{row.current_Points}</td>
                  <td>{row.points}</td>
                  <td>{row.conference}</td>
                  <td>{row.division}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </Container>
      
               
    )
  }
}

Table.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  }

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps,{ getItems })(Table);