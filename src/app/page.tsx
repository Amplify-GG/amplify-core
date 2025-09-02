"use client";

import React from "react";
import { Box, Container, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

// Пример данных матчей
const matches = [
  { id: 1, teamA: "Team Alpha", teamB: "Team Beta", date: "2025-09-05 18:00" },
  { id: 2, teamA: "Team Gamma", teamB: "Team Delta", date: "2025-09-06 20:00" },
  { id: 3, teamA: "Team Epsilon", teamB: "Team Zeta", date: "2025-09-07 19:30" },
  { id: 4, teamA: "Team Theta", teamB: "Team Iota", date: "2025-09-08 17:00" },
];

export default function BetsPage() {
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
          Ставки
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {matches.map((match) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: match.id * 0.2 }}
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
                    {match.teamA} vs {match.teamB}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.6)" }}>
                    {match.date}
                  </Typography>
                  <Button
                    component={Link}
                    href={`/bets/${match.id}`}
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
