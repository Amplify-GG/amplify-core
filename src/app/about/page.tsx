"use client";

import { Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" gutterBottom>
        О нас ℹ️
      </Typography>
      <Typography variant="body1">
        Amplify.gg — это инновационная платформа, объединяющая киберспорт, ставки и аналитику.
      </Typography>
    </Box>
  );
}
