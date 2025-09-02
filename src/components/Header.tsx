"use client";

import * as React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

import AppsIcon from "@mui/icons-material/Apps"; // логотип кубик
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"; // подарочек
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // кубок
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // помощь
import SearchIcon from "@mui/icons-material/Search"; // лупа
import SettingsIcon from "@mui/icons-material/Settings"; // шестеренка
import LanguageIcon from "@mui/icons-material/Language"; // глобус

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: "50px",
        minHeight: "50px",
        maxWidth: "1365px",
        mx: "auto",
        backgroundColor: "rgba(26,42,108,0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "50px", px: 0 }}>
        
        {/* Левая часть */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <IconButton component={Link} href="/" sx={{ color: "#fff", mr: 2 }}>
            <AppsIcon />
          </IconButton>
          {["Главная", "Ставки", "Прогнозы", "Медиа"].map((label, idx) => (
            <Button
              key={idx}
              component={Link}
              href={`/${label.toLowerCase()}`}
              color="inherit"
              sx={{ fontWeight: "bold", mx: 0.5 }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Правая часть */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <IconButton color="inherit" component={Link} href="/promotions">
            <CardGiftcardIcon />
          </IconButton>
          <Button color="inherit" component={Link} href="/promotions" sx={{ fontWeight: "bold", mx: 0.5 }}>
            Акции
          </Button>

          <IconButton color="inherit" component={Link} href="/tournaments">
            <EmojiEventsIcon />
          </IconButton>
          <Button color="inherit" component={Link} href="/tournaments" sx={{ fontWeight: "bold", mx: 0.5 }}>
            Турниры
          </Button>

          <Button color="inherit" component={Link} href="/help" sx={{ fontWeight: "bold", mx: 1 }}>
            Помощь
          </Button>

          <IconButton color="inherit" component={Link} href="/search">
            <SearchIcon />
          </IconButton>

          <IconButton color="inherit" component={Link} href="/settings">
            <SettingsIcon />
          </IconButton>

          <Button color="inherit" sx={{ display: "flex", alignItems: "center", mx: 1 }}>
            <LanguageIcon sx={{ mr: 0.5 }} /> RU
          </Button>

          <Button color="inherit" component={Link} href="/login" sx={{ fontWeight: "bold", ml: 1 }}>
            Войти
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
