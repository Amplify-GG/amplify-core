// amplify-ecosystem/apps/amplify-core/src/app/auth/profile/page.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h4">Личный кабинет</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Добро пожаловать! Это ваш личный кабинет.
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;
