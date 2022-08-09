import { InputLabel, TextField } from "@mui/material";
import "./EntryFilter.css";

// Material Ui kutuphanesindeki Textfield component'inin belirli fonksiyonlar ve componentler ile sarmalanmis hali.

const EntryFilter = (props) => {
  return (
    <div className="entry-filter">
      <div className="entry-filter-inner-container">
        <InputLabel id={"entry-filter-label"}>Filter</InputLabel>
        <TextField
          sx={{ width: 330 }}
          labelid="entry-filter-label"
          placeholder="Dizi / Film / Oyuncu Ara"
          onChange={(event) => {
            props.onChange(event);
          }}
        ></TextField>
      </div>
    </div>
  );
};

export default EntryFilter;
