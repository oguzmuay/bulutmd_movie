import { useState } from "react";
import DropDownSorter from "../../Components/DropdownSorter/DropDownSorter";
import CardArea from "../../Components/CardArea/CardArea";
import EntryFilter from "../../Components/EntryFilter/EntryFilter";
import FooterBar from "../../Components/FooterBar/FooterBar";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import "./EntriesPage.css";

const EntriesPage = (props) => {

  // Dizi yada filmleri siralamada kullanilan degiskenler.
  const sorterPairs = {
    newer: "Yeniye Gore Sirala",
    older: "Eskiye Gore Sirala",
    byScore: "Puana Gore Sirala",
    random: "Rastgele Sirala",
  };

  // Elimizdeki dizi yada filmlerin hangi veriye gore siralanacagini sakladigmiz state
  const [sorterValue, setSorterValue] = useState("newer");

  
  // Elimizdeki dizi yada filmlerin hangi veriye gore filtrelenecegini sakladigmiz state
  const [filterValue, setFilterValue] = useState("");

  // DropdownSorter component'inin onChange'ine yollanilan fonksiyon
  // Elimizdeki sorterValue state'ini degistirir.
  const sorterHandleFunction = (event) => {
    setSorterValue(event.target.value);
  };

  // EntryFilter component'inin onChange'ine yollanilan fonksiyon
  // Elimizdeki filterValue state'ini degistirir.
  const filterHandleFunction = (event) => {
    setFilterValue(event.target.value);
  };

  // Dizi yada filmlerin sorterValue ile siralamak icin kullanilan sort fonksiyonu
  const sortingFunction = (a,b) => {
    switch (sorterValue) {
      case "newer":
        return b.releaseYear - a.releaseYear
      case "older":
        return a.releaseYear - b.releaseYear
      case "byPoint":
        return b.releaseYear - a.releaseYear
      case "random":
        var random = Math.floor(Math.random() * 10);
        if (random > 5)
            return -1;
        else {
            return 1;
        }
      default:
        return 0;
    }
  };

  // Elimizdeki verilerin istenilen sirada ve filtreleme uygulanmis hallerini hazirlayan fonksiyon
  // Elimizdeki veriyi once filtreleme kosullarini kontrol ederek filtreler ardindan istenilen siralama olcutunde siralayip yeni veri dizisini dondurur.
  const prepareData = () => {
    return props.data[props.type]
      .filter((e, index) => {
        if (filterValue.length >= 3)
          return e.title.substring(0, filterValue.length) === filterValue;
        return index < 18;
      })
      .sort(sortingFunction);
  };

  return (
    <div className="entries-page page">
      <NavigationBar />
      <div className="utility-bar flex-container mobile-comp-flex-container">
        <EntryFilter onChange={filterHandleFunction} />
        <DropDownSorter
          onChange={sorterHandleFunction}
          values={sorterPairs}
          value={sorterValue}
        />
      </div>
      <CardArea cardType={"entry"} data={prepareData()} />
      <FooterBar />
    </div>
  );
};

export default EntriesPage;
