import React, { FC, memo } from "react";
import { isEqual } from "lodash";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import uuid from "../utils/uuid";
import newsImage from "../assets/news.jpg";

interface NewsListProps {
  data?: StoryProps[];
  handleStory?: (data: StoryProps) => void;
}
export interface StoryProps {
  description?: string;
  publishedAt?: string;
  title?: string;
  url?: string;
  urlToImage?: string;
  content?: string;
  author?: string;
}

const NewsList: FC<NewsListProps> = ({ data, handleStory }) => {
  return (
    <Container maxWidth='lg' sx={{ width: "100%" }}>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "2.5rem", marginBottom: "2.5rem", display: "flex" }}
      >
        {data?.map((story: StoryProps) => {
          const { description, title, urlToImage } = story;

          return (
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              key={uuid()}
              onClick={() => handleStory(story)}
            >
              <Card sx={{ width: "100%", alignSelf: "stretch" }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={urlToImage || newsImage}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                      {title}
                      {/* {title?.length > 90 ? `${title?.slice(0, 87)}` : title} */}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {description}
                      {/* {description?.length > 200 ? `${description?.slice(0, 197)}...` : title} */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const areEqual = (prevProps: NewsListProps, nextProps: NewsListProps) => {
  return isEqual(prevProps.data, nextProps.data);
};

export default memo(NewsList, areEqual);
