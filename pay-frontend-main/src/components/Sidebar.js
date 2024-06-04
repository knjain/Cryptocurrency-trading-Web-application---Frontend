import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RxDashboard } from "react-icons/rx";
import NotificationsIcon from '@mui/icons-material/Notifications';

import { BsFillPersonFill } from "react-icons/bs";
import { IoIosAnalytics } from "react-icons/io";
import { IoAnalyticsSharp, IoTicketSharp } from "react-icons/io5";
import { TbCards, TbReportAnalytics } from "react-icons/tb";
import { BiTransferAlt, BiMoneyWithdraw } from "react-icons/bi";
import {
  Withdrawals,
  Tickets,
  Reports,
  Transfers,
  Profile,
  Dashboard,
  Genealogy,
  Vouchers,
  Investments,
} from "../pages/index";
import { Badge, Menu, Tooltip } from "@mui/material";
import { Avatar, MenuItem } from "@material-tailwind/react";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
 
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState("Dashboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  return (
    <>
      <Box sx={{ display: "flex" ,}}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "rgb(25 25 25 )" }} elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ pl: 4 ,flexGrow:1 ,textAlign:"left"}}>
              C R Y P T O
            </Typography> 


            <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
          
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon fontSize="large"/>
              </Badge>
            </IconButton>
            
            <Box sx={{px:"24px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Box>

           
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: "#1B1D21",
              color: "#fff",
              
              
            },
          }}

        >
          <DrawerHeader
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Box className="" >
            <Typography
              sx={{
                fontSize: open ? "24px" :"12px",
                fontWeight: "bold",
                textAlign: "left",
                px: open ?2 :1,
                pt: open ?2 : 0,
                my:open ? 0 :2,
               
              }}
            >
              Personal
            </Typography>
          </Box>
          <List >
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Dashboard")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <RxDashboard fontSize={28} className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primary={"D A S H B O A R D"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Profile")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <BsFillPersonFill fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"P R O F I L E"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <Box className="" >
            <Typography
              sx={{
                fontSize: open ? "24px" :"12px",
                fontWeight: "bold",
                textAlign: "left",
                px: open ?2 :1,
                pt: 2,
                my:open ? 0 :2,

              }}
            >
              Business
            </Typography>
          </Box>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Investments")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <IoAnalyticsSharp fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"I N V E S T M E N T S"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Genealogy")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <IoIosAnalytics fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"G E N E A L O G Y"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            {/* <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Vouchers")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <TbCards fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"V O U C H E R S"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem> */}

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Transfers")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <BiTransferAlt fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"T R A N S F E R S"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Withdrawals")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <BiMoneyWithdraw fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"W I T H D R A W A L S"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Tickets")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <IoTicketSharp fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"T I C K E T S"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuItems("Reports")}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <TbReportAnalytics fontSize={28}n className="text-white"/>
                </ListItemIcon>
                <ListItemText
                  primary={"R E P O R T S"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3,backgroundColor: "rgb(33 33 33)", }}>
          <DrawerHeader />
          {menuItems == "Dashboard" && <Dashboard />}
          {menuItems == "Profile" && <Profile />}

          {menuItems == "Investments" && <Investments />}
          {menuItems == "Genealogy" && <Genealogy />}
          {menuItems == "Tickets" && <Tickets />}
          {menuItems == "Transfers" && <Transfers />}
          {menuItems == "Withdrawals" && <Withdrawals />}
          {menuItems == "Reports" && <Reports />}
          {menuItems == "Vouchers" && <Vouchers />}
        </Box>
      </Box>
    </>
  );
}
