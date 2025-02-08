import { InfinitySpin } from "react-loader-spinner";
import { motion } from "framer-motion";

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
    zIndex: 50,
    textAlign: "center",
    padding: "1rem",
  },
  text: {
    marginTop: "1rem",
    fontSize: "1.125rem",
    color: "#f97316",
    fontWeight: 600,
  },
  subText: {
    marginTop: "0.5rem",
    fontSize: "1rem",
    color: "#ffffff",
    fontWeight: 400,
    maxWidth: "80%",
  },
};

const Loading = () => {
  return (
    <motion.div 
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <InfinitySpin width="200" color="#f97316" ariaLabel="loading" />
      <p style={styles.text}>Loading...</p>
      <p style={styles.subText}>Empowering ideas, funding dreams. Please wait while we set things up!</p>
    </motion.div>
  );
};

export default Loading;
