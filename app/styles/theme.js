import { createTheme } from "@mui/material/styles";

// Créez un objet de thème personnalisé
const theme = createTheme({
    palette: {
        primary: {
            main: "#ff0000", // Couleur principale
        },
        secondary: {
            main: "#00ff00", // Couleur secondaire
        },
        button: {
            main: "#ffffff", // Couleur principale du bouton
            contrastText: "#ffffff", // Couleur du texte contrasté
            black: "#090808",
            white: "#fffefe",
        },
    },
});

export default theme;
