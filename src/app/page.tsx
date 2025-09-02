"use client";

import { Typography, Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "200vh",
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Parallax декоративные элементы */}
      <Parallax translateY={[-50, 50]} style={{ position: "absolute", top: "10%", left: "10%" }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
          }}
        />
      </Parallax>

      <Parallax translateY={[30, -60]} style={{ position: "absolute", top: "50%", right: "15%" }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.2)",
          }}
        />
      </Parallax>

      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Заголовок с анимацией */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Amplify.gg
          </Typography>
        </motion.div>

        {/* Подзаголовок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h5" sx={{ mb: 4 }}>
            Платформа киберспорта, ставок и прогнозов будущего
          </Typography>
        </motion.div>

        {/* Кнопки с анимацией */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "50px",
              background: "linear-gradient(45deg, #ff6b6b, #f06595)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              "&:hover": {
                background: "linear-gradient(45deg, #f06595, #ff6b6b)",
              },
            }}
          >
            Начать
          </Button>

          <Button
            variant="outlined"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "50px",
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                background: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Подробнее
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}