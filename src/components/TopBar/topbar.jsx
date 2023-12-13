import "./Topbar.css";
import React, { useState, useEffect } from "react";
import { Box, Typography, Badge } from "@mui/material";
import { DefaultImg } from "./DefaultImg";
import { NotificationsNoneOutlined } from "@mui/icons-material";

const Topbar = () => {
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    userPic: "",
  });
  useEffect(() => {
    const storedUser = localStorage.getItem("currentuser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser({
        firstName: parsedUser.firstName,
        lastName: parsedUser.lastName,
        userPic: parsedUser.userPic,
      });
    }
  }, []);

  return (
    <Box
      sx={{ marginTop: "-.5%" }}
      display="flex"
      padding="10px !important"
      justifyContent="space-between"
      p={2}
      bgcolor="#24d324"
    >
      <h2
        style={{
          color: "#fdfeff",
          marginTop: "1%",
          fontSize: "20px",
          marginLeft: "1%",
          fontWeight: "10p%",
        }}
      >
        Adavncing Sustainability {">>"} 1-1 Tackback Goal
      </h2>
      <Box display="flex">
        {/* <Badge color="error" variant="dot" style={{ marginTop:'5%', marginLeft:'-5%'}}>
          <NotificationsNoneOutlined />
        </Badge> */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Badge style={{ marginRight: "12px" }} color="error" variant="dot">
            <NotificationsNoneOutlined style={{ color: "#fdfeff" }} />
          </Badge>
          <img
            alt="profile-user"
            width="45em"
            height="45em"
            src={
              currentUser.userPic
                ? `data:image/jpg;base64,${currentUser.userPic}`
                : `${DefaultImg}`
            }
            style={{
              color: "black",
              cursor: "pointer",
              borderRadius: "50%",
              marginRight: "15px",
            }}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color="#fdfeff"
            fontWeight="bold"
            sx={{ m: "13px 0 0 0" }}
            fontSize="0.87rem"
            display={"flex"}
          >
            {currentUser.firstName} {currentUser.lastName}
          </Typography>
          <Typography variant="h5" color="black"></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
