import { Groups, Home, ModeNight, Pages, Settings } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "lightblue",
        display: { xs: "none", sm: "block" },
        gap: "10px",
      }}
      flex={1}
      p={2}
    >
      <Box position={"fixed"}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Home />

              <ListItemText primary="Home" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Pages />

              <ListItemText primary="Pages" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Groups />
              <ListItemText primary="Groups" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Settings />

              <ListItemText primary="Settings" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GroupIcon />

              <ListItemText primary="Friends" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HolidayVillageIcon />

              <ListItemText primary="Vacation" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ModeNight />

              <Switch />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
