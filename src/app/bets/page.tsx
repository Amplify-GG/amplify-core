"use client";

import { Typography, Box, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

interface Match {
  id: number;
  teams: string;
  date: string;
  odds: string;
}

const matches: Match[] = [
  { id: 1, teams: "Team Alpha vs Team Beta", date: "2025-09-05 18:00", odds: "1.8 | 2.0" },
  { id: 2, teams: "Team Gamma vs Team Delta", date: "2025-09-06 20:00", odds: "1.5 | 2.5" },
  { id: 3, teams: "Team Epsilon vs Team Zeta", date: "2025-09-07 17:30", odds: "2.1 | 1.7" },
];

export default function BetsPage() {
  return (
    <Box mt={4} mb={6}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Ставки 🎲
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {matches.map((match) => (
          <Grid item key={match.id} xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #ff6b6b, #f06595)",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {match.teams}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {match.date}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Коэффициенты: {match.odds}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      borderRadius: "30px",
                      px: 3,
                      background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #21cbf3, #2196f3)",
                      },
                    }}
                  >
                    Сделать ставку
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}