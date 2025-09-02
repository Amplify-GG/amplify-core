"use client";

import * as React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer } from "@mui/material";
import Link from "next/link";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const buttonStyle = {
    color: "#fff",
    fontWeight: 400,
    fontSize: "1rem",
    fontFamily: "'Igra Sans', sans-serif",
    textTransform: "none",
    px: 2,
    transition: "all 0.2s ease",
    "&:hover": { color: "#00bfff", transform: "scale(1.05)" },
  };

  const iconButtonStyle = {
    color: "#fff",
    transition: "all 0.2s ease",
    "&:hover": { color: "#00bfff", transform: "scale(1.2)" },
  };

  const divider = <Box sx={{ mx: 1, color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>|</Box>;

  const menuItems = ['Главная', 'Ставки', 'Прогнозы', 'Турниры', 'Акции', 'Вход', 'Регистрация'];

  // Drawer контент
  const drawerContent = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#121416",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "'Igra Sans', sans-serif",
        px: 2,
      }}
      role="presentation"
      onClick={toggleDrawer}
    >
      {menuItems.map((text) => (
        <Button
          key={text}
          component={Link}
          href={text === 'Главная' ? '/' : `/${text.toLowerCase()}`}
          sx={{
            ...buttonStyle,
            width: "100%",
            justifyContent: "flex-start",
            mb: 1,
          }}
        >
          {text}
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          height: "70px",
          backgroundColor: "#121416",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          width: "100%",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "70px", px: 2 }}>
          {/* Левая часть */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
            <IconButton component={Link} href="/" sx={iconButtonStyle}><AppsIcon /></IconButton>
            {menuItems.slice(0, 5).map((text, idx) => (
              <React.Fragment key={text}>
                <Button component={Link} href={text === 'Главная' ? '/' : `/${text.toLowerCase()}`} sx={buttonStyle}>
                  {text}
                </Button>
                {idx < 4 && divider}
              </React.Fragment>
            ))}
          </Box>

          {/* Бургер-иконка для мобильных */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "24px",
                width: "30px",
                p: 0,
              }}
              color="inherit"
            >
              <Box sx={{ width: "100%", height: "3px", bgcolor: "#fff", borderRadius: 1 }} />
              <Box sx={{ width: "100%", height: "3px", bgcolor: "#fff", borderRadius: 1 }} />
              <Box sx={{ width: "100%", height: "3px", bgcolor: "#fff", borderRadius: 1 }} />
            </IconButton>
          </Box>

          {/* Правая часть */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" component={Link} href="/settings" sx={iconButtonStyle}>
              <SettingsIcon />
            </IconButton>
            {divider}
            {menuItems.slice(5).map((text, idx) => (
              <React.Fragment key={text}>
                <Button component={Link} href={text === 'Вход' ? '/login' : '/register'} sx={buttonStyle}>
                  {text}
                </Button>
                {idx < 1 && divider}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer для мобильных */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{
          BackdropProps: { style: { backgroundColor: 'rgba(0,0,0,0.5)', transition: 'all 0.3s ease' } }
        }}
        sx={{
          '& .MuiDrawer-paper': {
            transition: 'all 0.3s ease',
            fontFamily: "'Igra Sans', sans-serif"
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}