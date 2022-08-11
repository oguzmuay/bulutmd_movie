import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./NavigationBar.css";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

// Her sayfada bulunan giris yapilmadan once giris veya uye olma tuslarinin oldugu
// giris yapildiktan sonra hesap ve cikis yap gibi tuslarinin oldugu component

const NavigationBar = (props) => {
  const navigate = useNavigate();
  const [hamburgerMenuFlag, setHamburgerMenuFlag] = useState(false);

  return (
    <div className="navigation-bar vertical-center flex-container">
      <div className="inner-container flex-container">
        <div className="title-container">
          <span
            className="title"
            onClick={() => {
              navigate("/");
            }}
          >
            BulutMD
          </span>
        </div>
        <MobileDrawer flag={hamburgerMenuFlag} close={setHamburgerMenuFlag}/>                
        <div className="hamburger-menu">
          <MenuRoundedIcon sx={{ color: " white", height: 60, width: 60 }} 
          onClick={(event) => {
            setHamburgerMenuFlag(true);
          }}/>
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
