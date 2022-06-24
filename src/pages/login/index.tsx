import styled from "@mui/system/styled";
import React from 'react';
import Container from "@mui/material/Container";
import colors from '../../theme/colors';
import Form from './form';

const CustomContainer = styled(Container)({
  backgroundColor: colors.white,
  color: colors.black,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const Login = ({ authenticate }) => (
  <CustomContainer>
    <Form authenticate={authenticate} />
  </CustomContainer>

);

export default Login;
