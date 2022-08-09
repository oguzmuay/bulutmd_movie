import "./EntryCard.css";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardActions, CardMedia, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

// Elimizdeki girdilerin yani dizi ve filmlerin verilerinin Card yapisi icerisinde gosteren component.
const EntryCard = (props) => {
  return (
    <div className="entry-card">
      <Card
        sx={{ minHeight: 300 }}
        onClick={() => {
          // Navigate to entry's page
        }}
      >
        <CardHeader
          title={props.data.title}
          subheader={props.data.releaseYear}
        />
        <CardMedia
          component="img"
          height="300"
          image={props.data.images["Poster Art"].url}
          alt="Image"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
// TODO: Icerisine card component ile bir dizi/film karti hazirla
export default EntryCard;
