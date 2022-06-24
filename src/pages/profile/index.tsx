import React from "react";
import styled from "@mui/system/styled";
import Container from '@mui/material/Container';
import colors from "../../theme/colors";

const CustomContainer = styled(Container)({
  backgroundColor: colors.white,
  boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.3)",
  color: colors.black,
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: "6.5rem",
});

const Profile = () => (
  <CustomContainer>
    profilepage
  </CustomContainer>
);

export default Profile;
