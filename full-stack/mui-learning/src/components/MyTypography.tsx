import { Typography } from "@mui/material";
import React from "react";

const MyTypography = () => {
  return (
    <div>
      <Typography variant="h1">TYPOGRAPHY</Typography>

      <Typography variant="h1" gutterBottom>
        Klk
      </Typography>
      <Typography variant="h2">Klk</Typography>
      <Typography variant="h3">Klk</Typography>
      <Typography variant="h4">Klk</Typography>
      <Typography variant="h5">Klk</Typography>
      <Typography variant="h6">Klk</Typography>

      <Typography variant="subtitle1">Klk</Typography>
      <Typography variant="subtitle2">Klk</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, debitis,
        similique hic esse qui odio sapiente ab, veniam dolore earum dolorem
        quis soluta. Adipisci enim ad eligendi ullam! Ipsam, reiciendis?
      </Typography>
      <Typography variant="body2">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, debitis,
        similique hic esse qui odio sapiente ab, veniam dolore earum dolorem
        quis soluta. Adipisci enim ad eligendi ullam! Ipsam, reiciendis?
      </Typography>
    </div>
  );
};

export default MyTypography;
