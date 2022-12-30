import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from "./About";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";
import data from "../data";
import Carousel from "react-material-ui-carousel";
import { Container, Box } from "@mui/material";

function createProjectCard(data) {
  return (
    <ProjectCard
      key={data.id}
      name={data.name}
      link={data.link}
      description={data.description}
      logoHTML={data.logoHTML}
      logoCSS={data.logoCSS}
      logoJs={data.logoJs}
      logoEJs={data.logoEJs}
      logoReact={data.logoReact}
      logoNodeJs={data.logoNodeJs}
      logoMongoDB={data.logoMongoDB}
    />
  );
}
export default function App() {
  return (
    <Container disableGutters maxWidth={false}>
      {/* ---------------Navbar--------------- */}

      <Navbar />

      {/* ---------------About--------------- */}
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: "10px",
          mr: "0px",
          height: "100vh",
        }}
        id="about"
      >
        <Container>
          <Box>
            <Section text="ABOUT" />
          </Box>

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <About />
          </Box>
        </Container>
      </Container>

      {/* ---------------Projects--------------- */}

      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "#212121",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
          p: "10px",
          height: "100vh",
          overflow: "scroll",
        }}
        id="projects"
      >
        <Container maxWidth={false} disableGutters>
          <Box>
            <Section text="PROJECTS" />
          </Box>

          <Carousel
            navButtonsProps={{ size: "large" }}
            navButtonsAlwaysVisible={true}
            interval={null}
          >
            {data.map(createProjectCard)}
          </Carousel>
        </Container>
      </Container>

      {/* ---------------Contact--------------- */}

      <Container
        maxWidth={false}
        sx={{ backgroundColor: "#616161", p: "10px" }}
        id="contact"
      >
        <Box sx={{ margin: "auto" }}>
          <Section text="CONTACT" />
        </Box>

        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Contact />
        </Box>
      </Container>
    </Container>
  );
}
