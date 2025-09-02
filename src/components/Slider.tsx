"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1465146633011-14f18c72b735?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&h=450&fit=crop",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <Box sx={{ position: "relative", width: "100%", height: 450, overflow: "hidden" }}>
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`slide-${index}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "450px",
            objectFit: "cover",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* Кнопка "назад" */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Кнопка "вперёд" */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Индикаторы */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}