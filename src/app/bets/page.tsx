"use client";

import { Typography, Box } from "@mui/material";

export default function BetsPage() {
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" gutterBottom>
        Ставки 🎲
      </Typography>
      <Typography variant="body1">
        Здесь будут отображаться текущие матчи и коэффициенты.
      </Typography>
    </Box>
  );
}
