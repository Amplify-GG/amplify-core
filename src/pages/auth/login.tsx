// amplify-ecosystem/apps/amplify-core/src/app/auth/login/page.tsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика входа (пока редирект на /profile)
    router.push("/auth/profile");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Typography variant="h4" gutterBottom>Вход</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Пароль"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Войти
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
