import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Header from "../Components/header";
import Image from "next/image";

import fs from "fs";
import path from "path";

function portfolio() {
    const imageDirectory = "/images/portfolio/projet1/";
    const images = fs
        .readdirSync(path.join(process.cwd(), "public", imageDirectory))
        .slice(1);
    console.log("images:", images);

    return (
        <Container maxWidth="xl" sx={{}}>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "5rem",
                }}
            >
                {images.map((image, index) => (
                    <Image
                        key={index + 1}
                        src={`${imageDirectory}${image}`}
                        alt={`Image ${index + 1}`}
                        width={2000}
                        height={1125}
                        style={{ maxWidth: "80%", height: "auto" }}
                    />
                ))}
            </Box>
        </Container>
    );
}

export default portfolio;
