// src/components/LandingSection.js
import React from "react";
import { Avatar, Typography } from "@mui/material";
import FullScreenSection from "./FullScreenSection";
import logo from "../ak-logo.png";

const greeting = "Hello, I am Andrew!";
const bio1 = "a Software Engineer";
const bio2 = "Specialized in React, Node.js, JS, and much more...";

const LandingSection = () => (
  <FullScreenSection
    isDarkBackground
    backgroundColor="#2A4365"
    className="full-screen-section"
  >
    <div className="greeting-box">
      <Avatar src={logo} sx={{ width: 120, height: 120 }} alt="A K" />
      <Typography variant="h5" component="h3">
        {greeting}
      </Typography>
    </div>
    <div className="bio-box">
      <Typography variant="h4" component="h1">
        {bio1}
      </Typography>
      <Typography variant="h6" component="h2">
        {bio2}
      </Typography>
    </div>
  </FullScreenSection>
);

export default LandingSection;
