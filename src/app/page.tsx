"use client";

import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <Box textAlign="center" mt={10}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom>
          Добро пожаловать в Amplify.gg 🎮
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Платформа для киберспорта, ставок и прогнозов будущего.
        </Typography>
      </motion.div>
    </Box>
  );
}
