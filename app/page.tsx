"use client";
import React from "react";
import {
    Typography,
    Grid,
    Button,
    List,
    ListItem,
    Box,
    Container,
} from "@mui/material";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/styles/theme";

const Home: React.FC = () => {
    const items: string[] = [
        "ART DIRECTOR,",
        "GRAPHIC DESIGNER,",
        "PHOTOGRAPHY LOVER,",
        "INTUITION TRUSTER.",
    ];

    return (
        <ThemeProvider theme={theme}>
            <main className={`${styles.main} ${styles.background}`}>
                {/*                 <Grid
                    container
                    sx={{
                        maxWidth: "500px",
                        paddingTop: "15vh",
                        marginLeft: "3vw",
                    }}
                >
                    <Grid item xs={6} sx={{ padding: "0" }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            className={styles["font_HattonMedium"]}
                            sx={{ textAlign: "right" }}
                        >
                            Cécile A.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ padding: "0" }}></Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            height: "400px",
                            padding: "0",
                        }}
                    ></Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            height: "400px",
                            padding: "0",
                            borderLeft: "2px solid white",
                        }}
                    ></Grid>
                    <Grid item xs={6} sx={{ padding: "0" }}></Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            padding: "0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        <List>
                            {items.map((item, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        paddingLeft: "0",
                                        fontSize: "1rem",
                                        fontWeight: "lighter",
                                    }}
                                >
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                        <Button
                            variant="contained"
                            sx={{
                                justifyContent: "start",
                                fontWeight: "lighter",
                                backgroundColor: "white",
                                color: "black",
                                textAlign: "left",
                                paddingRight: "2rem",
                                fontSize: "1rem",
                                borderRadius: "0px",
                                lineHeight: "3rem",
                                ":hover": {
                                    backgroundColor: "black",
                                    color: "white",
                                },
                            }}
                        >
                            MORE HERE.
                        </Button>
                    </Grid>
                </Grid> */}
                <Container
                    sx={{
                        marginRight: 0,
                        marginLeft: "7rem",
                        paddingLeft: "7rem",
                        paddingTop: "7rem",
                        maxWidth: "fit-content",
                    }}
                >
                    <Box
                        sx={{
                            width: "fit-content",
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            className={styles["font_HattonMedium"]}
                            sx={{
                                width: "fit-content",
                                position: "relative",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    height: "56vh",
                                    width: "2px",
                                    top: "40px",
                                    right: "1.1px",
                                    borderLeft: "2px solid white",
                                },
                            }}
                        >
                            Cécile A.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "fit-content",
                            paddingLeft: "134px",
                            paddingTop: "56vh",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                height: "400px",
                                width: "2px",
                                top: "40px",
                                right: "1.1px",
                                borderLeft: "2px solid white",
                            },
                        }}
                    >
                        <List>
                            {items.map((item, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        paddingLeft: "0",
                                        fontSize: "1rem",
                                        fontWeight: "lighter",
                                    }}
                                    className={styles["font_AntiqueOliveLight"]}
                                >
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                        <Link href="/contact" passHref>
                            <Button
                                variant="contained"
                                sx={{
                                    justifyContent: "start",
                                    fontWeight: "lighter",
                                    backgroundColor: "white",
                                    color: "black",
                                    textAlign: "left",
                                    paddingRight: "4rem",
                                    fontSize: "1rem",
                                    borderRadius: "0px",
                                    lineHeight: "3rem",
                                    ":hover": {
                                        backgroundColor: "black",
                                        color: "white",
                                    },
                                }}
                                className={styles["font_AntiqueOliveLight"]}
                            >
                                MORE HERE.
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
};

export default Home;
