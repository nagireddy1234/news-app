import React from "react";
import styled from "@mui/system/styled";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../../theme/colors";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BACKTO_NEWS, NOT_KNOWN } from "../../typeConstants";



const Story = ({ }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("state", state)

  const CustomContainer = styled(Container)({
    backgroundColor: colors.white,
    color: colors.black,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: "6.5rem",
  });
  return <CustomContainer>
    <Grid container>
      <Grid item sm={6}>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{ border: 'none', color: colors.black, "&:hover": { border: 'none' } }} onClick={() => navigate('/main')}>
          {BACKTO_NEWS}
        </Button>
      </Grid>
      <Grid item sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', flexDirection: 'row' }}>
        <Typography ><span style={{ color: colors.darkGray, fontSize: '0.9rem' }}>published:</span> {new Date(state?.publishedAt).toLocaleString() || NOT_KNOWN}</Typography>
        <Typography sx={{ marginLeft: '2rem' }}><span style={{ color: colors.darkGray, fontSize: '0.9rem' }}>author:</span> {state?.author || NOT_KNOWN}</Typography>
      </Grid>
    </Grid>

    <iframe src={state?.url} title={state?.title} style={{ width: '100%', height: "calc(100% - 150px)", marginTop: '1.5rem' }}>
    </iframe>
  </CustomContainer>;
};

export default Story;
