"use client";

import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Roboto, sans-serif" }}>
        {/* Навигация */}
        <AppBar position="sticky" color="primary" sx={{ background: "linear-gradient(90deg, #3f51b5, #2196f3)" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Amplify.gg
            </Typography>
            <Button color="inherit" component={Link} href="/">Home</Button>
            <Button color="inherit" component={Link} href="/bets">Bets</Button>
            <Button color="inherit" component={Link} href="/predictions">Predictions</Button>
            <Button color="inherit" component={Link} href="/about">About</Button>
          </Toolbar>
        </AppBar>

        {/* Контент */}
        <Container sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>

        {/* Футер */}
        <Box component="footer" sx={{ p: 2, textAlign: "center", background: "#f5f5f5" }}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Amplify.gg — All Rights Reserved
          </Typography>
        </Box>
      </body>
    </html>
  );
}