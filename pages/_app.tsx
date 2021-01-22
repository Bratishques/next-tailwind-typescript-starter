import "../styles/globals.css";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const MyApp: React.FC<{ Component; pageProps }> = ({
  Component = "",
  pageProps = "",
}) => {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
MyApp.defaultProps = {
  Component: "",
  pageProps: "",
};

export default MyApp;
