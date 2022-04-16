import React from "react";
import { Container, Typography, makeStyles, Divider, useTheme, Box, useMediaQuery } from "@material-ui/core";
import Social from "../Social";

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const year  = new Date().getFullYear()  // returns the current year
    return (
        <Container>
            <Divider style={{ backgroundColor: theme.palette.primary.main }} />
            <Box className={classes.footer}>
                {isMobile && <Social mobile />}
                <Typography variant="body2" color="initial">
                    © {year } ADAM JAMIU
                </Typography>
            </Box>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
    },
}));

export default Footer;
