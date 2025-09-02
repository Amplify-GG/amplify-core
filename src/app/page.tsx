"use client";

import { Typography, Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* Заголовок с анимацией */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Amplify Core
          </Typography>
        </motion.div>

        {/* Подзаголовок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h5" sx={{ mb: 4 }}>
            Добро пожаловать в демонстрационный проект с Material UI и анимациями
          </Typography>
        </motion.div>

        {/* Кнопки */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4,
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
              px: 4,
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
