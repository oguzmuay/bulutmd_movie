import { Grid } from "@mui/material";
import TypeCard from "../TypeCard/TypeCard";
import EntryCard from "../EntryCard/EntryCard";

import "./CardArea.css";

// Elimizdeki herhangi bir turdeki kart component'ini grid icerisinde gosteren component
const CardArea = (props) => {
  return (
    <div className="entry-area">
      <Grid container spacing={2}>
        {prepareCards(props.cardType, props.data)}
      </Grid>
    </div>
  );
};
// Kart alaninda hangi tipte veri isteniyorsa kartlarini hazirlayip geriye dondurur.
const prepareCards = (type, data) => {
  switch (type) {
    case "type":
      const keys = Object.keys(data);
      return keys.map((key, index) => {
        return (
          <Grid key={"type-" + index} item xs={12} sm={6} md={4}>
            <TypeCard data={{ data: data[key], url: key }} />
          </Grid>
        );
      });
    case "entry":
      return data.map((entry, index) => {
        return (
          <Grid key={"entry-" + index} item xs={12} sm={6} md={4}>
            <EntryCard data={entry} />
          </Grid>
        );
      });
    default:
      break;
  }
};

export default CardArea;
