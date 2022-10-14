import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const data = {
  boxNo: "70119004",
  keyDeposit: -170,
  keyRental: 1400,
  keyNo: "11118080",
  rateNo: 131,
  accountNo: "0",
  accountType: "account Type",
  bopCode: null,
  staffBenefit: [
    {name: "Yes", code: 0, description: "Yes"},
    {name: "No", code: 1, description: "No"},
  ],
  modeOfOperation: [
    {name: "Yes", code: 0, description: "Yes"},
    {name: "No", code: 1, description: "No"},
  ],
  varianceAmount: 0,
  varianceCode: [
    {name: "A", code: 0, description: "A"},
    {name: "B", code: 1, description: "B"},
  ],
  remarks: "",
  addressCIFNo: "800091830",
  addressSequence: 1,
  addressLine1: "No 18",
  addressLine2: "Jalan 18, TAMAN 18",
  addressLine3: "56100",
    addressLine4: "KUALA LUMPUR",
  };

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
