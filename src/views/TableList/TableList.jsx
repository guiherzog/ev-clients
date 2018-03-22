import React, { Component } from 'react';
import { Grid } from "material-ui";
import { connect } from 'react-redux';

import { RegularCard, ClientTable, ItemGrid } from "components";

import { getClients, editClient, removeClient } from '../../actions/actions';

class TableList extends Component{
  componentDidMount(){
    this.props.getClients();
  }

  render(){
    const props = this.props;
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="blue"
            cardTitle="All Active Clients"
            cardSubtitle="Here you can add, edit or remove any clients"
            content={
              <ClientTable
                tableHeaderColor="info"
                tableHead={["ID", "Name", "Email", "Phone", "Address"]}
                tableData={this.props.clients}
                removeItem={(id) => props.removeClient(id)}
                editItem={(id) => props.editClient(id)}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

TableList.defaultProps = {
  clients: [],
};

const mapStateToProps = (state, ownProps) => {
  return ({
    clients: state.clients
  })
}

const mapDispatchToProps = dispatch => ({
  editClient: id => dispatch(editClient(id)),
  removeClient: id => dispatch(removeClient(id)),
  getClients: () => dispatch(getClients())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableList)
