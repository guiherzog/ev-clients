import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import {
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
} from "variables/charts";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid xs={12} sm={12} md={4}>
            <ItemGrid xs={12} sm={12} md={12}>
              <StatsCard
                icon={Accessibility}
                iconColor="green"
                title="Clients"
                description="20+"
                statIcon={Update}
                statText="Last Client Added: Guilherme Herzog"
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <ChartCard
                chart={
                  <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                }
                chartColor="green"
                title="Total Clients"
                text={
                  <span>
                    <span className={this.props.classes.successText}>
                      <ArrowUpward
                        className={this.props.classes.upArrowCardCategory}
                      />{" "}
                      10%
                    </span>{" "}
                    increase from last week.
                  </span>
                }
                statIcon={AccessTime}
                statText="updated 4 minutes ago"
              />
            </ItemGrid>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <ItemGrid xs={12} sm={12} md={12}>
              <RegularCard
                headerColor="blue"
                cardTitle="Last 10 Clients Added"
                cardSubtitle="To see all clients click on the 'All Clients' option on the sidebar"
                content={
                  <Table
                    tableHeaderColor="blue"
                    tableHead={["ID", "Name", "Email", "Phone"]}
                    tableData={[
                      ["1", "Guilherme Herzog", "guihermeherzog@gmail.com", "+55 (21) 979 366 060"],
                      ["2", "Marcelo Herzog", "marcelo.herzog@gmail.com", "+55 (21) 979 366 060"],
                      ["3", "Viktoria Arndt", "viktoria.arndt@gmail.com", "+55 (21) 979 366 060"],
                      ["4", "Andrea Frank", "andrea.frank@gmail.com", "+55 (21) 979 366 060"]
                    ]}
                  />
                }
              />
            </ItemGrid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
