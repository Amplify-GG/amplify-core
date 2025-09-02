"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import ImageSlider from "@/components/Slider";

export default function HomePage() {
  return (
    <>
      {/* Слайдер */}
      <ImageSlider />

      {/* Контент главной страницы */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #121416 0%, #1b1d20 100%)",
          color: "#fff",
          fontFamily: "'Igra Sans', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          py: 5,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 400 }}>
            Добро пожаловать в Amplify Bets
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, color: "rgba(255,255,255,0.7)" }}
          >
            Погрузись в мир киберспортивных ставок и прогнозов
          </Typography>
          <Button
            component={Link}
            href="/bets"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #00bfff, #1e90ff)",
              color: "#fff",
              fontFamily: "'Igra Sans', sans-serif",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              "&:hover": {
                background: "linear-gradient(90deg, #1e90ff, #00bfff)",
              },
            }}
          >
            Перейти к ставкам
          </Button>
        </Container>
      </Box>
    </>
  );
}