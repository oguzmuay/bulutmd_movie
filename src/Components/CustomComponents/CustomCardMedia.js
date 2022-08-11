import { CardMedia, styled } from "@mui/material";


const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
      height: 450,
    },
    [theme.breakpoints.up('tablet')]: {
      height: 288,
    },
    [theme.breakpoints.up('laptop')]: {
      height: 180,
    },
    [theme.breakpoints.up('desktop')]: {
      height: 165,
    },
  }));

export default CustomCardMedia;