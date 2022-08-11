import "./EntryCard.css";

import CardHeader from "@mui/material/CardHeader";
import {ThemeProvider } from '@mui/material/styles';

import theme from "../../CustomThemes"
import CustomCard from "../CustomComponents/CustomCard";
import CustomCardMedia from "../CustomComponents/CustomCardMedia";


// Elimizdeki girdilerin yani dizi ve filmlerin verilerinin Card yapisi icerisinde gosteren component.
const EntryCard = (props) => {  

  return (
    <div className="entry-card">
      <ThemeProvider theme={theme}>
      <CustomCard
        className="flex-card"
        onClick={() => {
          // Navigate to entry's page
        }}
      >
        <span className="card-title">
        {props.data.title}
        </span>
        <CustomCardMedia
          component="img"
          image={props.data.images["Poster Art"].url}
          alt="Image"
        />
      </CustomCard>
      </ThemeProvider>
    </div>
  );
};
export default EntryCard;

/*
<CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
*/

/*

        <CardHeader
          titleTypographyProps={{variant:'h10' }}
          title={props.data.title}
          subheader={props.data.releaseYear}
          subheaderTypographyProps={{variant:'span' }}
        />

*/