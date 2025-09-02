"use client";

import React from "react";
import { Box, Container, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const predictions = [
  { id: 1, match: "Team Alpha vs Team Beta", prediction: "Победа Team Alpha", confidence: "80%" },
  { id: 2, match: "Team Gamma vs Team Delta", prediction: "Ничья", confidence: "60%" },
  { id: 3, match: "Team Epsilon vs Team Zeta", prediction: "Победа Team Zeta", confidence: "75%" },
];

export default function PredictionsPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #121416 0%, #1b1d20 100%)",
        color: "#fff",
        fontFamily: "'Igra Sans', sans-serif",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, textAlign: "center", fontWeight: 400 }}>
          Прогнозы
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {predictions.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.2 }}
              style={{ flex: "1 1 300px", maxWidth: "300px" }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c1e22",
                  borderRadius: 3,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.match}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Прогноз: {item.prediction}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.6)" }}>
                    Уверенность: {item.confidence}
                  </Typography>
                  <Button
                    component={Link}
                    href={`/bets/${item.id}`}
                    variant="contained"
                    sx={{
                      background: "linear-gradient(90deg, #00bfff, #1e90ff)",
                      color: "#fff",
                      fontFamily: "'Igra Sans', sans-serif",
                      textTransform: "none",
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      "&:hover": { background: "linear-gradient(90deg, #1e90ff, #00bfff)" },
                    }}
                  >
                    Сделать ставку
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}