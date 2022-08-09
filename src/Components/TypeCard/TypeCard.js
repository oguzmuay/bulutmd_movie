import "./TypeCard.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


  // Girdilerimizin tip bilgilerini (Dizi/Film) alip o tipe ait girdileri gorebilmemiz icin siteyi navigate eden component.
const TypeCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="type-card">
      <Card sx={{ height: 300 }} onClick={()=>{
        navigate("/entries/"+props.data.url);
      }}>
        <CardMedia 
        component="img"
        height="300"
        image = {props.data["data"].imageURL}
        alt="Image"
        />
      </Card>
      <CardContent>
        <Typography className="type-title" sx={{ fontSize: 28 }}>
            {props.data["data"].title}
        </Typography>
      </CardContent>
    </div>
  );
};
// TODO: Icerisine card component ile bir Type karti hazirla
export default TypeCard;
