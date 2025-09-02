"use client";

import * as React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

import AppsIcon from "@mui/icons-material/Apps"; // логотип кубик
import SettingsIcon from "@mui/icons-material/Settings"; // шестеренка

export default function Header() {
const buttonStyle = {
  color: "#fff",
  fontWeight: 400,
  fontSize: "1rem",
  fontFamily: "'Igra Sans', sans-serif",
  textTransform: "none",
  px: 2
  };

  const divider = (
    <Typography sx={{ mx: 1, color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>|</Typography>
  );

  return (
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={Link} href="/" sx={{ color: "#fff", mr: 3 }}>
            <AppsIcon />
          </IconButton>

          <Button component={Link} href="/" sx={buttonStyle}>Главная</Button>
          {divider}
          <Button component={Link} href="/bets" sx={buttonStyle}>Ставки</Button>
          {divider}
          <Button component={Link} href="/predictions" sx={buttonStyle}>Прогнозы</Button>
          {divider}
          <Button component={Link} href="/tournaments" sx={buttonStyle}>Турниры</Button>
          {divider}
          <Button component={Link} href="/promotions" sx={buttonStyle}>Акции</Button>
        </Box>

        {/* Правая часть */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" component={Link} href="/settings">
            <SettingsIcon sx={{ color: "#fff" }} />
          </IconButton>
          {divider}
          <Button component={Link} href="/login" sx={buttonStyle}>Вход</Button>
          {divider}
          <Button component={Link} href="/register" sx={buttonStyle}>Регистрация</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
