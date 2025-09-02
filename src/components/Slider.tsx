"use client";

import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "https://picsum.photos/id/1015/1600/450",
  "https://picsum.photos/id/1016/1600/450",
  "https://picsum.photos/id/1018/1600/450",
  "https://picsum.photos/id/1020/1600/450",
  "https://picsum.photos/id/1024/1600/450",
  "https://picsum.photos/id/1025/1600/450",
  "https://picsum.photos/id/1027/1600/450",
  "https://picsum.photos/id/1031/1600/450",
  "https://picsum.photos/id/1033/1600/450",
  "https://picsum.photos/id/1035/1600/450",
];

export default function ImageSlider() {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div style={{ position: "relative", width: "100%", marginTop: "10px" }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Кнопки управления */}
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}