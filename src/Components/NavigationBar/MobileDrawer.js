import { Drawer, Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const MobileDrawer = (props) => {
  return (
    <Drawer
      anchor="top"
      open={props.flag}
      onClose={() => {
        props.close();
      }}
    >
      <Box width={"100%"} role={"presentation"} textAlign="center" display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
        <Typography variant="h4" component={"div"}>
          BulutMD Movie
        </Typography>
        <Button className="login-button" variant="contained" sx={{width:250, marginBottom:1, marginTop:3}}>
          Giris
        </Button>
        <Button className="register-button" variant="contained" sx={{width:250, marginBottom:1}}>
          Deneme Baslat
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
