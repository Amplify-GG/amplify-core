"use client";

import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useScrollTrigger, Slide, Fade } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import CubeIcon from "@mui/icons-material/Apps";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 50 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  // State для меню "Прогнозы"
  const [anchorPred, setAnchorPred] = React.useState<null | HTMLElement>(null);
  const handlePredOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorPred(event.currentTarget);
  const handlePredClose = () => setAnchorPred(null);

  // State для меню "Помощь"
  const [anchorHelp, setAnchorHelp] = React.useState<null | HTMLElement>(null);
  const handleHelpOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorHelp(event.currentTarget);
  const handleHelpClose = () => setAnchorHelp(null);

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(26, 42, 108, 0.85)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Левая часть */}
          <Box sx={{ display: "flex", alignItems: "center", ml: "10%" }}>
            <IconButton component={Link} href="/" sx={{ color: "#fff", mr: 2 }}>
              <CubeIcon />
            </IconButton>
            <Button component={Link} href="/" color="inherit" sx={{ fontWeight: "bold", mr: 2 }}>
              Главная
            </Button>

            {/* Прогнозы с Dropdown */}
            <Button
              color="inherit"
              sx={{ fontWeight: "bold" }}
              onMouseEnter={handlePredOpen}
              onMouseLeave={handlePredClose}
            >
              Прогнозы
            </Button>
            <Menu
              anchorEl={anchorPred}
              open={Boolean(anchorPred)}
              onClose={handlePredClose}
              MenuListProps={{
                onMouseEnter: handlePredOpen,
                onMouseLeave: handlePredClose,
              }}
              TransitionComponent={Fade}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem component={Link} href="/predictions/esports">Киберспорт</MenuItem>
              <MenuItem component={Link} href="/predictions/soccer">Футбол</MenuItem>
              <MenuItem component={Link} href="/predictions/basketball">Баскетбол</MenuItem>
            </Menu>
          </Box>

          {/* Правая часть */}
          <Box sx={{ display: "flex", alignItems: "center", mr: "10%" }}>
            <Button color="inherit" sx={{ fontWeight: "bold", mr: 2 }}>
              Войти
            </Button>

            <IconButton color="inherit" sx={{ mr: 1 }}>
              <LanguageIcon />
            </IconButton>

            <IconButton color="inherit" sx={{ mr: 1 }}>
              <SettingsIcon />
            </IconButton>

            <IconButton color="inherit" sx={{ mr: 1 }}>
              <SearchIcon />
            </IconButton>

            <Typography sx={{ mx: 1 }}>|</Typography>

            {/* Помощь с Dropdown */}
            <IconButton
              color="inherit"
              onMouseEnter={handleHelpOpen}
              onMouseLeave={handleHelpClose}
            >
              <HelpOutlineIcon />
            </IconButton>
            <Menu
              anchorEl={anchorHelp}
              open={Boolean(anchorHelp)}
              onClose={handleHelpClose}
              MenuListProps={{
                onMouseEnter: handleHelpOpen,
                onMouseLeave: handleHelpClose,
              }}
              TransitionComponent={Fade}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem component={Link} href="/help/faq">FAQ</MenuItem>
              <MenuItem component={Link} href="/help/contact">Связаться с нами</MenuItem>
              <MenuItem component={Link} href="/help/tutorials">Учебные материалы</MenuItem>
            </Menu>

            <Button color="inherit" sx={{ fontWeight: "bold", ml: 1 }}>
              Помощь
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}