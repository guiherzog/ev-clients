import React from "react";
import { Grid } from "material-ui";
import { connect } from 'react-redux';
import { addClient, editClient } from '../../actions/actions';

import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

function UserProfile({ dispatch, ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="green"
            cardTitle="Add New Client"
            cardSubtitle="Please fill the information below"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email address"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Phone Number"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Street"
                      id="street"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={
              <Button  
                color="success"
                onClick={() => 
                  dispatch(addClient(["14", "Andrea Frank", "andrea.frank@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355, Hamburg"]))
                }
              >
                Create Client
              </Button>}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

UserProfile = connect()(UserProfile);

export default UserProfile;
