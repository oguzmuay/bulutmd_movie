import CardArea from "../../Components/CardArea/CardArea";
import FooterBar from "../../Components/FooterBar/FooterBar";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import "./HomePage.css";

const HomePage = (props) => {
  // Elimdeki dummy data icerisindeki girdi tiplerinin verilerini sakladigim bir javascript objesi.
  // Bu verileri homepage'de tekrar kullanilmak icin baslik ve resim url verisini saklar.
  // Resim url verisi elimizeki film veya dizi girdilerinin ilk 10 elamanlarindan rastgele aliniyor.
    const types = {"movies":{"title":"Film", "imageURL": props.data.movies[Math.floor(Math.random() * 10)].images["Poster Art"].url},
     "series":{"title":"Dizi", "imageURL": props.data.series[Math.floor(Math.random() * 10)].images["Poster Art"].url}}
     
  return (
    <div className="home-page page">
      <NavigationBar />
      <div className="information-bar">
        <span>Populer Basliklar</span>
      </div>
      <CardArea cardType={"type"} data={types}/>
      <FooterBar />
    </div>
  );
};

export default HomePage;
