import React from "react";
import { Grid } from "material-ui";
import { connect } from 'react-redux';

import { RegularCard, ClientTable, ItemGrid } from "components";

import { getClients, editClient, removeClient } from '../../actions/actions';

function TableList({ ...props }) {
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
              tableData={[ ...props.clients ]}
              removeItem={(id) => console.log('Removing client '+id)}
              editItem={(id) => console.log('Editing client '+id)}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  clients: getClients().clients
})

const mapDispatchToProps = dispatch => ({
  editClient: id => dispatch(editClient(id)),
  removeClient: id => dispatch(removeClient(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableList)
