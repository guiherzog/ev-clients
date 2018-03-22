import React from "react";
import { Grid } from "material-ui";

import { RegularCard, ClientTable, ItemGrid } from "components";

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
              tableData={[
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"],
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"],
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"],
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"],
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"],
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"],
                ["1", "Guilherme Herzog", "guilhermeherzog@gmail.com", "+55 (21) 979 366 060", "Stadthausbrücke 5, 20355 Hamburg"]
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
