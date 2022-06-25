import React from "react";
import styled from "@mui/system/styled";
import Container from '@mui/material/Container';
import colors from "../../theme/colors";
import InputWithLabel from "../../components/inputs/inputWithLabel";
import { Box, Grid, Typography } from "@mui/material";
import { PROFILE } from "../../typeConstants";

const CustomContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  flexDirection: 'column',
  alignItems: "center",
  height: '100vh',
});

const CustomGrid = styled(Grid)({
  backgroundColor: colors.white,
  color: colors.black,
  boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.3)",
  padding: '3rem',
  width: '60%',
  "@media (max-width:1200px)": {
    width: '80%',
  },
  "@media (max-width:900px)": {
    width: '100%',
    boxShadow: "none",
    padding: '0',
  },
})

const Profile = () => (
  <CustomContainer >
    <CustomGrid>
      <Typography variant='h6' sx={{ textAlign: 'center', marginBottom: '1rem', textTransform:'uppercase' }} >{PROFILE}</Typography>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <InputWithLabel label='Email' value='nagireddy@gmail.com' />
        <InputWithLabel label='API key' value='388b6672301440108a8e699cde1389ce' />
      </Box>
    </CustomGrid>
  </CustomContainer>
);

export default Profile;
