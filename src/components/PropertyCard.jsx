import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Divider } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import Crop75OutlinedIcon from '@mui/icons-material/Crop75Outlined';

const PropertyCard = ({ property }) => {
    const iconStyle = { fontSize: 18, color: "#6e67eb" };
    const smallTextStyle = { fontSize: 13, paddingLeft: 0.6, color: "gray" };
    const smallBoxStyle = { display: "flex", alignItems: "center" };

    return (
        <Card sx={{ maxWidth: 350, m: 3 }} >
            <CardMedia
                component="img"
                height="200"
                image={property.imgSrc}
                alt={property.type}
            />
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Price of property */}
                    <Typography sx={{ color: "#6e67eb", fontWeight: "bold", fontSize: 19 }}>${property.price}
                        <Typography variant="caption" sx={{ color: "gray" }}>/month</Typography>
                    </Typography>
                    {/* Heart icon */}
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: 20, color: "#6e67eb", border: 1, borderColor: "#cfcfd1", borderRadius: 20, padding: 1 }} />
                </Box>

                {/* Property Name */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{property.name}</Typography>
                {/* Property location */}
                <Typography sx={{ fontSize: 14, paddingBlock: 0.8, color: "gray" }}>{property.location}</Typography>

                <Divider />

                {/* Bottom bar */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 1.5 }}>
                    {/* No. of Beds */}
                    <Box sx={smallBoxStyle}>
                        <BedOutlinedIcon sx={iconStyle} />
                        <Typography sx={smallTextStyle}>{property.bedrooms} Beds</Typography>
                    </Box>

                    {/* No. of Bathrooms */}
                    <Box sx={smallBoxStyle}>
                        <BathtubOutlinedIcon sx={iconStyle} />
                        <Typography sx={smallTextStyle}>{property.bathrooms} Bathrooms</Typography>
                    </Box>

                    {/* No. of Area */}
                    <Box sx={smallBoxStyle}>
                        <Crop75OutlinedIcon sx={iconStyle} />
                        <Typography sx={{ fontSize: 13, position: "relative", paddingLeft: 0.6, color: "gray" }}>{property.area} m<Box component="span" sx={{ fontSize: 8, position: "absolute" }}>2</Box></Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;
