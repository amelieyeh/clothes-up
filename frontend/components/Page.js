import PropTypes from "prop-types";

export default function Page({ children }) {
  return (
    <div>
      <h1>I am PAGE</h1>
      {children}
    </div>
  );
}

Page.defaultProps = {
  children: PropTypes.node,
};
