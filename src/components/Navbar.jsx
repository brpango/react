import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "primary",
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary",
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color={"error"}>
            <Mail />
          </Badge>
          <Badge badgeContent={9} color={"error"}>
            <Notifications />
          </Badge>
          <Avatar
            src="https://www.udsm.ac.tz/upload/20220619_042746_UDSM_UDSM%20yazindua%20usafiri%20wa%20mabasi%20kwa%20wafanyakazi.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={(e) => setOpen(true)}
        >
          <Avatar width="30" height="30" src="../../public/images/Bakari.jpg" />
          <Typography variant="span">Bakari</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
