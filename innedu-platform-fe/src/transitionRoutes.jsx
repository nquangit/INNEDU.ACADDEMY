import { motion } from "framer-motion";

import PropTypes from "prop-types";

export default function TransitionRoutes({ children }) {
    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{
                y: (2 * window.innerWidth) / 3,
                transition: { duration: 0.2, easing: "ease-in-out" },
            }}
        >
            {children}
        </motion.div>
    );
}

TransitionRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};
