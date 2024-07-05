import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Account", "Team", "About App"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <AccountBoxIcon /> : <></>}
                {index === 1 ? <GroupsIcon /> : <></>}
                {index === 2 ? <TabletMacIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar color={"bg - primary"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />

            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book-N-Park
          </Typography>
          <Button color="inherit">
            <Link to="/">
              <button type="button" class="btn btn-outline-light">
                <i class="fas fa-sign-out-alt px-1"></i>
                Logout
              </button>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// import { Button } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     // <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-primary px-5">
//     <nav class="navbar bg-primary px-5" data-bs-theme="dark">
//       <a className="navbar-brand" href="#">
//         Book-N-Park
//       </a>
//       <Link to="/">
//         <button type="button" class="btn btn-outline-light">
//           <i class="fas fa-sign-out-alt px-1"></i>
//           Logout
//         </button>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;
