import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

function header() {
    return (
        <Container maxWidth="xl" disableGutters sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: "1" }}>
                <Link href="/">
                    <Button sx={{ color: "black" }}>Cécile A.</Button>
                </Link>
            </Box>
            <Box>
                <Link href="/contact">
                    <Button sx={{ color: "black" }}>Contact</Button>
                </Link>
                <Link href="www.google.com">
                    <Button sx={{ color: "black" }}>
                        <InstagramIcon />
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default header;
