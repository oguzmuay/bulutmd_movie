import { Button } from "@mui/material";
import "./NavigationBar.css";

// Her sayfada bulunan giris yapilmadan once giris veya uye olma tuslarinin oldugu
// giris yapildiktan sonra hesap ve cikis yap gibi tuslarinin oldugu component

const NavigationBar = (props) => {
  return (
    <div className="navigation-bar vertical-center flex-container">
      <div className="inner-container flex-container">
        <div className="title-container">
          <span className="title">BulutMD</span>
        </div>
        <div className="log-container horizontal-center flex-container">
          <Button className="login-button" variant="text">
            Giris
          </Button>
          <Button className="register-button" variant="contained">
            Deneme Baslat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
