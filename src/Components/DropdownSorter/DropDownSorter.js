import { InputLabel, MenuItem, Select } from "@mui/material";
import "./DropDownSorter.css";

// Material Ui kutupanesinin Select component'inin belirli fonksiyonlar ve componentler ile sarmalanmis hali.
const DropDownSorter = (props) => {
  /* Props:
    - onChange: Component icerisindeki bir veri degisikligi oldugunda kullanicinin disardan islem yapabilmesi icin gonderdigi prop. 
    - value: Component'in gosterebilmesi icin gonderilen veri.
    - values: Component icerisinde bulunan veri secenekleri 

    Butun hepsi props ile gonderilmistir bu sekilde ayni component'i farkli veriler ile uygulama icerisinde kullanilma hedeflenmistir.

  */
  return (
    <div className="drop-down-sorter">
      <div className="drop-down-sorter-inner-container">
        <InputLabel id={"entry-sorter-label"}>Sorter</InputLabel>
        <Select
          sx={{ minWidth: 250, width:280}}
          labelId="entry-sorter-label"
          label="Sorter"
          onChange={props.onChange}
          value={props.value}
        >
          {Object.keys(props.values).map((key, index) => {
            return (
              <MenuItem value={key} key={key + "" + index}>
                {props.values[key]}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default DropDownSorter;
