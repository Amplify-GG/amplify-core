"use client";

import React from "react";
import { Box, Container, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

// Пример данных турниров
const tournaments = [
  { id: 1, name: "Champions Cup", date: "2025-09-10", prize: "$50,000" },
  { id: 2, name: "Pro League Finals", date: "2025-09-15", prize: "$75,000" },
  { id: 3, name: "Summer Showdown", date: "2025-09-20", prize: "$30,000" },
];

export default function TournamentsPage() {
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
          Турниры
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {tournaments.map((tournament) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tournament.id * 0.2 }}
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
                    {tournament.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, color: "rgba(255,255,255,0.6)" }}>
                    Дата: {tournament.date}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.6)" }}>
                    Приз: {tournament.prize}
                  </Typography>
                  <Button
                    component={Link}
                    href={`/tournaments/${tournament.id}`}
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
                    Подробнее
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
