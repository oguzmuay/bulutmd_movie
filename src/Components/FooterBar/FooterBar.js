import "./FooterBar.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Her sayfanin alt kisminda bulunan footer component'i.
const FooterBar = (props) => {
  return (
    <div className="footer-bar mobile-comp-flex-container">
      <div className="usefull-links">
        Anasayfa | Kullanici Sozlesmesi | Gizlilik Sozlesmesi
      </div>
      <div className="social-medias flex-container">
        <div className="social-media-icon">
          {" "}
          <FacebookIcon sx={{ width: 48, height: 48 }} />{" "}
        </div>
        <div className="social-media-icon">
          {" "}
          <TwitterIcon sx={{ width: 48, height: 48 }} />{" "}
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
