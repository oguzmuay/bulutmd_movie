import { Card, styled } from "@mui/material";



const CustomCard = styled(Card)(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
      width: 300,
    },
    [theme.breakpoints.up('tablet')]: {
      width: 192,
    },
    [theme.breakpoints.up('laptop')]: {
      width: 120,
    },
    [theme.breakpoints.up('desktop')]: {
      width: 110,
    },
  }));


export default CustomCard;