import React, { useEffect, useState } from "react";
import styled from "@mui/system/styled";
import Container from '@mui/material/Container';
import colors from "../../theme/colors";
import InputWithLabel from "../../components/inputs/inputWithLabel";
import { Box, Button, Grid, Typography } from "@mui/material";
import { PROFILE, UPDATE } from "../../typeConstants";
import { getDataFromLocalStorage, localStorageKeys, saveDataInLocalStorage } from "../../utils/localStorage";


interface userInfoProps {
  email?: string,
  apiKey?: string
}

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
  textAlign: 'center',
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

const Profile = () => {
  const [profileName, setProfileName] = useState<string>();
  const [profileEmail, setPropfileEmail] = useState<string>();
  const [profileApiKey, setPropfileApiKey] = useState<string>();
  useEffect(() => {
    const userInfo = getDataFromLocalStorage(localStorageKeys.login)
    const tempName = userInfo?.email.split('@')
    setProfileName(tempName[0])
    setPropfileEmail(userInfo?.email)
    setPropfileApiKey(userInfo?.apiKey)
  }, [profileName, profileApiKey, profileEmail]);


  const updateProfile = () => {
  saveDataInLocalStorage(localStorageKeys.profileInfo, {profileName,profileEmail,profileApiKey})
  }
  return (<CustomContainer >
    <CustomGrid>
      <Typography variant='h6' sx={{ textAlign: 'center', marginBottom: '1rem', textTransform: 'uppercase' }} >{PROFILE}</Typography>
      <Box sx={{ width: '100%', margin: '0 auto', textAlign: 'initial' }}>
        <InputWithLabel label='Name' inputValue={profileName} />
        <InputWithLabel label='Email' inputValue={profileEmail} />
        <InputWithLabel label='API key' inputValue={profileApiKey} />
      </Box>
      <Button
        variant='contained'
        color='primary'
        sx={{ my: "1rem", color: colors.white, backgroundColor: colors.darkPrimary }}
        onClick={updateProfile}>
        {UPDATE}
      </Button>
    </CustomGrid>
  </CustomContainer>)
};

export default Profile;
