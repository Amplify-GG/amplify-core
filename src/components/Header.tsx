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
          background: "rgba(26, 42, 108, 0.85)", // полупрозрачный синий-пурпурный
          backdropFilter: "blur(10px)", // эффект размытия
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Amplify.gg
          </Typography>

          <div>
            {["/", "/bets", "/predictions", "/about"].map((path, idx) => {
              const labels = ["Home", "Bets", "Predictions", "About"];
              return (
                <Button
                  key={idx}
                  component={Link}
                  href={path}
                  color="inherit"
                  sx={{
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  {labels[idx]}
                </Button>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
