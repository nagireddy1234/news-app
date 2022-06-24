import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import uuid from '../utils/uuid';
import newsImage from '../assets/news.jpg';

const CustomContainer = styled(Container)({
  backgroundColor: colors.white,
  color: colors.black,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: 'auto 0',
});

const NewsStory: FC = () => (
  <CustomContainer >
    <p>News story</p>
  </CustomContainer>
);

export default NewsStory;
