import * as React from "react";
import { motion } from "framer-motion";
import { Watch } from "react-loader-spinner";

const container = {
    hidden: {
        opacity: 1,
        scale: 1,
    },
    visible: {
        opacity: 0,
        scale: 0,
        transition: {
            delay: 3.4,
            duration: 0.3,
        },
    },
};

const svg = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 0.5,
        transition: {
            when: "afterChildren",
            duration: 0.1,
            delay: 3,
            staggerChildren: 0.2,
        },
    },
};

const path = (strokeDashoffset) => ({
    hidden: { strokeDashoffset },
    visible: {
        strokeDashoffset: 0,
    },
});

const pathProps = {
    variants: path(200),
    transition: {
        duration: 1,
    },
};

const rectProps = {
    variants: path(866),
    transition: {
        duration: 1.5,
    },
};

const Mehdi = (props) => {

    return (
        <>
            <Watch ariaLabel="loading-indicator" />
        </>
    );
};

export default Mehdi;
