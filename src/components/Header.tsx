"use client";

import * as React from "react";
import { AppBar, Toolbar, Typography, Button, useScrollTrigger, Slide } from "@mui/material";
import Link from "next/link";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 100 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #3f51b5, #2196f3)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Amplify.gg
          </Typography>

          <div>
            <Button
              component={Link}
              href="/"
              color="inherit"
              sx={{
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/bets"
              color="inherit"
              sx={{
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Bets
            </Button>
            <Button
              component={Link}
              href="/predictions"
              color="inherit"
              sx={{
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Predictions
            </Button>
            <Button
              component={Link}
              href="/about"
              color="inherit"
              sx={{
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              About
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
