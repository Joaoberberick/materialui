import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: "24px",
                    paddingBottom: "18px",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    marginTop: "5px",
                }
            }
        },
        MuiCard:{
            styleOverrides:{
                root: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }
        },
        MuiCardMedia:{
            styleOverrides: {
                root: {
                    paddingTop: "56.25%" //16:9
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    flexGrow: 0,
                }
            }
        }
    }
});

export default theme;