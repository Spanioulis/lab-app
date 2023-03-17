import React from "react";
import { Typography } from "@mui/material";

const Overview = ({ props }) => {
  return (
    <Typography variant="h6" component="h6" align="center">
      {props}
    </Typography>
  );
};

export default Overview;
