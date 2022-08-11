import {Grid, ThemeProvider } from "@mui/material";
import TypeCard from "../TypeCard/TypeCard";
import EntryCard from "../EntryCard/EntryCard";
import theme from "../../CustomThemes";

import "./CardArea.css";

// Elimizdeki herhangi bir turdeki kart component'ini grid icerisinde gosteren component
const CardArea = (props) => {

  const spacing = () => {
    if(props.cardType === "type")
      return 2;
      
    return 0;
   }

  return (
    <div className="entry-area">
      <Grid container 
      spacing={spacing()}
      >
      {prepareCards(props.cardType,props.data)}
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
          <ThemeProvider key={"entry-" + index} theme={theme}>
          <Grid key={"type-" + index} item 
          mobile={12} tablet={3}>
            <TypeCard data={{ data: data[key], url: key }} />
          </Grid>
          </ThemeProvider>
        );
      });
    case "entry":
      return data.map((entry, index) => {
        return (
          <ThemeProvider key={"entry-" + index} theme={theme}>
          <Grid key={"entry-" + index} item mb={1}
          mobile={12} tablet={6} between={3} laptop={1.5} desktop={1}>
            <EntryCard data={entry} />
          </Grid>
          </ThemeProvider>
        );
      });
    default:
      break;
  }
};

export default CardArea;
/*

*/
