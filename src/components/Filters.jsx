import React, { useContext, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, Button, Grid, Container } from "@mui/material";
import dummyData from "../data/dummy";
import SearchBox from "./filters/SearchBox";
import PropertyContext from "../store/PropertyContext";

const Filters = ({ handleSearch }) => {

    const [selectedLocation, setSelectedLocation] = React.useState("");
    const [selectedWhenToMove, setSelectedWhenToMove] = React.useState("");
    const [selectedPropertyType, setSelectedPropertyType] = React.useState("");
    const [selectedPriceRange, setSelectedPriceRange] = React.useState("");

    const propertyTypes = Array.from(new Set(dummyData.map((property) => property.type)));
    const whenToMove = Array.from(new Set(dummyData.map((property) => property.whenToMove)));
    const locations = Array.from(new Set(dummyData.map((property) => {
        let arr = property.location.split(",");
        arr.shift();
        return arr.join(",");
    })));

    const priceRange = [
        "$1,000 - $1,500",
        "$1,500 - $2,000",
        "$2,000 - $2,500",
        "$2,500+",
    ]

    const setFilters = useContext(PropertyContext);

    useEffect(() => {
        setFilters({
            location: selectedLocation,
            whenToMove: selectedWhenToMove,
            propertyType: selectedPropertyType,
            prices: convertPriceRangeToInt(selectedPriceRange)
        });
    }, [selectedLocation, selectedWhenToMove, selectedPropertyType, selectedPriceRange]);

    console.log(setFilters);



    function convertPriceRangeToInt(priceRangeString) {
        // Remove non-numeric characters and split into minimum and maximum parts
        if (!priceRangeString) return [0, 0];
        const [minStr, maxStr] = priceRangeString
            .replace(/\$/g, '')
            .split('-')
            .map(value => value.replace(/[^0-9]/g, ''));

        // Convert to numbers
        const min = parseInt(minStr, 10);
        const max = parseInt(maxStr, 10) ? parseInt(maxStr, 10) : min;

        const priceValue = [min, max];

        return priceValue;
    }

    return (
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Locations */}
            <SearchBox optionsData={locations} label="Location" displayText="Select the location" setSelectedValue={setSelectedLocation} />
            {/* when to move */}
            <SearchBox optionsData={whenToMove} label="When To Move" displayText="Select When To Move" setSelectedValue={setSelectedWhenToMove} />
            {/* Property type */}
            <SearchBox optionsData={propertyTypes} label="Property Type" displayText="Select Property Type" setSelectedValue={setSelectedPropertyType} />
            {/* Prices */}
            <SearchBox optionsData={priceRange} label="Prices" displayText="Select Price" setSelectedValue={setSelectedPriceRange} />


            <Button sx={{ bgcolor: "#6f65f8", color: "white", textTransform: "none", ":hover": { bgcolor: "#6f65f0" } }} size="large" onClick={handleSearch}>Search</Button>
        </Container>
    );
};

export default Filters;
