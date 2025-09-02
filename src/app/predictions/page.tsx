"use client";

import { Typography, Box } from "@mui/material";

export default function PredictionsPage() {
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" gutterBottom>
        Прогнозы 📊
      </Typography>
      <Typography variant="body1">
        Здесь пользователи смогут делиться своими прогнозами и анализом матчей.
      </Typography>
    </Box>
  );
}
