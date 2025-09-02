"use client";

import React from "react";
import { Box, Container, Typography, IconButton, Link as MuiLink, Button } from "@mui/material";
import {
  Telegram,
  GitHub,
  YouTube,
  Instagram,
  Facebook,
  Apple,
  Android,
} from "@mui/icons-material";
import DiscordIcon from "@mui/icons-material/Groups"; // Discord

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121416",
        color: "#fff",
        mt: 1,
        fontFamily: "'Igra Sans', sans-serif",
      }}
    >
      {/* Верхний блок с Telegram-ботом */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          py: 3.5, // минимальные вертикальные отступы
          textAlign: "center",
        }}
      >
        <Button
          href="https://t.me/yourbot"
          target="_blank"
          size="small"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            textTransform: "none",
            borderRadius: 2,
            px: 1,        // горизонтальные отступы
            py: 0.3,      // вертикальные отступы
            minWidth: "auto",
            width: "auto",
            height: 28,
            fontFamily: "'Igra Sans', sans-serif",
            fontSize: "0.78rem",
            lineHeight: 1,
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            mx: "auto",   // центрирование по горизонтали
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          <Telegram sx={{ fontSize: 15 }} />
          <Box component="span" sx={{ ml: 0.25 }}>
            Telegram-бот
          </Box>
        </Button>
      </Box>

      {/* Основной блок футера */}
      <Box
        sx={{
          py: 4,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 4,
          }}
        >
          {/* Кнопки приложений */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Android */}
            <Box
              sx={{
                width: 180,
                height: 52,
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                color: "#fff",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#333" },
                fontFamily: "'Igra Sans', sans-serif",
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Android sx={{ fontSize: 24 }} />
              <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1, textAlign: "left" }}>
                <Typography variant="subtitle2" sx={{ fontFamily: "'Igra Sans', sans-serif" }}>
                  Приложение
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: "'Igra Sans', sans-serif" }}>
                  для Android
                </Typography>
              </Box>
            </Box>

            {/* iOS */}
            <Box
              sx={{
                width: 180,
                height: 52,
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                color: "#fff",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#333" },
                fontFamily: "'Igra Sans', sans-serif",
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Apple sx={{ fontSize: 24 }} />
              <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1, textAlign: "left" }}>
                <Typography variant="subtitle2" sx={{ fontFamily: "'Igra Sans', sans-serif" }}>
                  Приложение
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: "'Igra Sans', sans-serif" }}>
                  для iOS
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Навигация */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <MuiLink href="/" underline="none" sx={{ color: "#fff", fontFamily: "'Igra Sans', sans-serif" }}>
              Главная
            </MuiLink>
            <MuiLink href="/bets" underline="none" sx={{ color: "#fff", fontFamily: "'Igra Sans', sans-serif" }}>
              Ставки
            </MuiLink>
            <MuiLink href="/predictions" underline="none" sx={{ color: "#fff", fontFamily: "'Igra Sans', sans-serif" }}>
              Прогнозы
            </MuiLink>
            <MuiLink href="/about" underline="none" sx={{ color: "#fff", fontFamily: "'Igra Sans', sans-serif" }}>
              О нас
            </MuiLink>
          </Box>

          {/* Соцсети */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                fontFamily: "'Igra Sans', sans-serif",
                color: "#fff",
                fontSize: "1.4rem",
              }}
            >
              Мы в соцсетях
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 40px)",
                gap: 1,
                justifyContent: "center",
                mb: 1,
              }}
            >
              <IconButton component="a" href="https://vk.com" target="_blank" sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>
                <Facebook sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton component="a" href="https://t.me/" target="_blank" sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>
                <Telegram sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>
                <Instagram sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 40px)",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <IconButton component="a" href="https://discord.com" target="_blank" sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>
                <DiscordIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton component="a" href="https://github.com/Amplify-GG" target="_blank" sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>
                <GitHub sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton component="a" href="https://youtube.com" target="_blank" sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>
                <YouTube sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Нижний блок */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          gap: 2,
        }}
      >
        <Button
          href="/documents"
          sx={{
            width: 36,
            height: 36,
            minWidth: 36,
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 2,
            fontFamily: "'Igra Sans', sans-serif",
            fontSize: "0.9rem",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          18+
        </Button>

        <Typography
          variant="caption"
          color="rgba(255,255,255,0.5)"
          sx={{ fontFamily: "'Igra Sans', sans-serif" }}
        >
          © {new Date().getFullYear()} Amplify.gg. Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
}