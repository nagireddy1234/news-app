import React, { FC } from 'react';
import styled from "@mui/system/styled";
import Container from "@mui/material/Container";
import colors from '../../theme/colors';
import Form, { LoginProps } from './form';

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

const Login: FC<LoginProps> = ({ authenticate }) => (
  <CustomContainer>
    <Form authenticate={authenticate} />
  </CustomContainer>
);

export default Login;
