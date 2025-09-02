"use client";

import * as React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const buttonStyle = {
    color: "#fff",
    fontWeight: 400,
    fontSize: "1rem",
    fontFamily: "'Igra Sans', sans-serif",
    textTransform: "none",
    px: 2,
    transition: "all 0.2s ease",
    "&:hover": { color: "#00bfff", transform: "scale(1.05)" }
  };

  const iconButtonStyle = {
    color: "#fff",
    transition: "all 0.2s ease",
    "&:hover": { color: "#00bfff", transform: "scale(1.2)" }
  };

  const divider = (
    <Typography sx={{ mx: 1, color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>|</Typography>
  );

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {['Главная', 'Ставки', 'Прогнозы', 'Турниры', 'Акции', 'Вход', 'Регистрация'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href={text === 'Главная' ? '/' : `/${text.toLowerCase()}`}>
              <ListItemText primary={text} sx={{ fontFamily: "'Igra Sans', sans-serif'" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ height: "70px", backgroundColor: "#121416", boxShadow: "0 2px 10px rgba(0,0,0,0.3)", width: "100%" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "70px", px: 2 }}>
        
        {/* Левая часть */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
          <IconButton component={Link} href="/" sx={iconButtonStyle}><AppsIcon /></IconButton>
          <Button component={Link} href="/" sx={buttonStyle}>Главная</Button>{divider}
          <Button component={Link} href="/bets" sx={buttonStyle}>Ставки</Button>{divider}
          <Button component={Link} href="/predictions" sx={buttonStyle}>Прогнозы</Button>{divider}
          <Button component={Link} href="/tournaments" sx={buttonStyle}>Турниры</Button>{divider}
          <Button component={Link} href="/promotions" sx={buttonStyle}>Акции</Button>
        </Box>

        {/* Бургер-иконка для мобильных */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Правая часть */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" component={Link} href="/settings" sx={iconButtonStyle}>
            <SettingsIcon />
          </IconButton>
          {divider}
          <Button component={Link} href="/login" sx={buttonStyle}>Вход</Button>
          {divider}
          <Button component={Link} href="/register" sx={buttonStyle}>Регистрация</Button>
        </Box>

        {/* Drawer для мобильных */}
        <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
          {drawerContent}
        </Drawer>

      </Toolbar>
    </AppBar>
  );
}
