import React, { FC } from 'react';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import colors from '../../theme/colors';

interface PageNotfoundProps {
  title: string
}

const CustomContainer = styled(Container)({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});


const PageNotfound: FC<PageNotfoundProps> = ({ title }) => (
  <CustomContainer>
    <Typography sx={{
      fontSize: '5rem',
      color: colors.red,
    }}
    >
      {title}
    </Typography>
  </CustomContainer>
);

export default PageNotfound;
