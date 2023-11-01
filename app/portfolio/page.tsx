import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "../Components/header";
import Image from "next/image";

import fs from "fs";
import path from "path";

function portfolio() {
    const imageDirectory = "/images/portfolio/projet1/";
    const images = fs.readdirSync(
        path.join(process.cwd(), "public", imageDirectory)
    );

    return (
        <Container maxWidth="xl" sx={{}}>
            <Header />
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        src={`${imageDirectory}${image}`}
                        alt={`Image ${index}`}
                        width={2000}
                        height={1125}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            ))}
        </Container>
    );
}

export default portfolio;
