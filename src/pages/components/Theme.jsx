import React from "react";
import { Box, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import ToogleSwitch from "./helpers/ToogleSwitch";
import { useTheme } from "@emotion/react";

export default function Main() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ marginTop: "10px" }}>
        <Card>
          <Card.Header>
            <Box
              className="d-flex justify-content-center align-items-center"
              gap={2}
            >
              <Typography variant="h4" gutterBottom>
                Dark Mode Toogle
              </Typography>
              <Box>
                <ToogleSwitch />
              </Box>
            </Box>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
              <Box className={`App ${theme === "dark" ? "dark-mode" : ""}`}>
                <div>
                  <h2>Home</h2>
                </div>
              </Box>
            </Card.Text>
          </Card.Body>
        </Card>
      </Box>
    </>
  );
}
