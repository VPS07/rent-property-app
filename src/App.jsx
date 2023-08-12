import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import dummyData from "./data/dummy";
import PropertyCard from "./components/PropertyCard";
import Filters from "./components/Filters";
import PropertyContext from "./store/PropertyContext";

const App = () => {
  const [filteredData, setFilteredData] = useState(dummyData);
  const [filters, setFilters] = useState({
    location: "",
    whenToMove: "",
    propertyType: "",
    prices: [0, 0],
  });

  const handleSearch = () => {
    const filteredProperties = dummyData.filter((property) => {
      return (
        (property.location.indexOf(filters.location) !== -1) &&
        (property.whenToMove === filters.whenToMove) &&
        (property.type === filters.propertyType) &&
        (filters.prices[0] <= property.price && property.price <= filters.prices[1])
      );
    });

    setFilteredData(filteredProperties);
  };



  return (
    <PropertyContext.Provider value={setFilters}>
      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 10 }}>
        {/* <h1>Rent a Property</h1> */}

        <Filters handleSearch={handleSearch} />

        <Grid container >
          {filteredData.map((property, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <PropertyCard key={property.id} property={property} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PropertyContext.Provider>
  );
};

export default App;
