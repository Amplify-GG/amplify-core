"use client";

import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

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
    <Box mt={4} mb={4}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Ставки 🎲
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto", mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Матч</TableCell>
              <TableCell>Дата и время</TableCell>
              <TableCell>Коэффициенты</TableCell>
              <TableCell align="center">Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match) => (
              <TableRow key={match.id}>
                <TableCell>{match.teams}</TableCell>
                <TableCell>{match.date}</TableCell>
                <TableCell>{match.odds}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: "30px", px: 3 }}
                  >
                    Сделать ставку
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
